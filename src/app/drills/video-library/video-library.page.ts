import { Component, OnInit, Inject } from '@angular/core';
import { TPHelper } from 'src/app/services/tp-helper';
import { DomSanitizer } from '@angular/platform-browser';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import { AuthService } from 'src/app/auth/auth.service';
import { FirestoreService } from 'src/app/shared/firestore.service';
import { DOCUMENT } from '@angular/common';
import { rejects } from 'assert';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-video-library',
  templateUrl: './video-library.page.html',
  styleUrls: ['./video-library.page.scss'],
})
export class VideoLibraryPage implements OnInit {

  constructor(
    private helper: TPHelper,
    private domSanitizer: DomSanitizer,
    private auth: AuthService,
    private fs: FirestoreService,
    @Inject(DOCUMENT) private document: Document

  ) { }

  loadingArray = ["", "", "", "", "", "", "", "", ""]
  view = 'library';
  youtubeRegex = new RegExp('^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.?be)\/.+$')
  validUrl;
  trustedVideoUrl;
  youtubeUrl;
  videos;
  showSkeleton = true;
  ngOnInit() {
  }


  ionViewWillEnter() {
    this.getVideos();
  }

  async getVideos() {
    firebase.firestore().collection("/users/" + (await this.auth.user).uid + "/videoLibrary").onSnapshot((snapshot) => {
      this.videos = snapshot.docs.map(doc => doc.data());
      this.showSkeleton = false;
    })
  }
  resetYoutube() {
    this.trustedVideoUrl = "";
  }
  close() {
    this.helper.closeModal();
  }
  updateView(event) {
    let value = event.detail.value;
    this.view = value;
  }

  checkUrl() {
    let url = this.youtubeUrl;
    this.validUrl = this.youtubeRegex.test(url);
    if (this.validUrl) {
      let videoId = this.getYouTubeGetID(url);
      let videoUrl = "https://www.youtube.com/embed/" + videoId;
      this.youtubeUrl = videoUrl;
      this.getSafeUrl(videoUrl)
    } else {
      this.trustedVideoUrl = ""
    }
  }


  getSafeUrl(url) {

    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(url);

  }

  getYouTubeGetID(url) {
    var ID = '';
    url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if (url[2] !== undefined) {
      ID = url[2].split(/[^0-9a-z_\-]/i);
      ID = ID[0];
    }
    else {
      ID = url;
    }
    return ID;
  }

  saveYoutubeVideo() {
    let videoId = this.getYouTubeGetID(this.youtubeUrl);
    let imageCover = "http://img.youtube.com/vi/" + videoId + "/0.jpg";
    let video = {
      videoUrl: this.youtubeUrl,
      videoCoverUrl: imageCover,
      isYoutubeVideo: true,
    }
    this.helper.closeModal(video);
  }

  async saveFileToStorage(file, name) {
    let uid = (await this.auth.user).uid;
    return new Promise((resolve, reject) => {
      firebase.storage().ref("/users/" + uid + "/drills/" + name).put(file)
        .then(async (result) => {
          return resolve(
            {
              url: (await result.ref.getDownloadURL()),
              filePath: result.ref.fullPath
            }
          );
        })
        .catch((error) => {
          this.helper.hideLoading();
          this.helper.showError(error.message);
          return reject();
        })
    })
  }


  async uploadVideo(event) {
    this.helper.showLoading({ message: "Uploading Video" });

    let uid = (await this.auth.user).uid;
    let videoFile = event.target.files[0];
    let posterFile = this.dataURItoBlob(await this.generateThumbnail(videoFile));
    let video: any = await this.saveFileToStorage(videoFile, "/" + videoFile.name + "/" + videoFile.name);
    let poster: any = await this.saveFileToStorage(posterFile, "/" + videoFile.name + "/poster");
    this.fs.add("/users/" + uid + "/videoLibrary", { url: video.url, filePath: video.filePath, name: videoFile.name, poster: poster.url, posterPath: poster.filePath }).then(() => {
      this.helper.hideLoading();
    })
  }



  async removeVideo(video) {
    this.helper.showConfirmationAlert("Remove Video", "Are you sure you want to remove this video? It can not be undone. ", "Remove Video")
      .then(async (result) => {
        if (result) {
          await firebase.storage().ref(video.filePath).delete();
          await firebase.storage().ref(video.posterPath).delete();
          await this.fs.delete(video.path)
        }
      })
  }

  generateThumbnail(videoFile: Blob): Promise<string> {
    const video: HTMLVideoElement = this.document.createElement('video');
    const canvas: HTMLCanvasElement = this.document.createElement('canvas');
    const context: CanvasRenderingContext2D = canvas.getContext('2d');
    return new Promise<string>((resolve, reject) => {
      canvas.addEventListener('error', reject);
      video.addEventListener('error', reject);
      video.addEventListener('canplay', event => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        resolve(canvas.toDataURL());
      });
      if (videoFile.type) {
        video.setAttribute('type', videoFile.type);
      }
      video.preload = 'auto';
      video.src = window.URL.createObjectURL(videoFile);
      video.load();
    });
  }

  dataURItoBlob(dataURI) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    //Old Code
    //write the ArrayBuffer to a blob, and you're done
    //var bb = new BlobBuilder();
    //bb.append(ab);
    //return bb.getBlob(mimeString);

    //New Code
    return new Blob([ab], { type: mimeString });

  }


  selectVideo(video) {
    let v = {
      videoUrl: video.url,
      videoCoverUrl: video.poster,
      isYoutubeVideo: false,
    }
    this.helper.closeModal(v);
  }

}
