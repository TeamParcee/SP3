import { Component, OnInit } from '@angular/core';
import { TPHelper } from 'src/app/services/tp-helper';
import { VideoLibraryPage } from '../video-library/video-library.page';
import { Drill } from '../drill';
import { DomSanitizer } from '@angular/platform-browser';
import { FirestoreService } from 'src/app/shared/firestore.service';
import { User } from 'src/app/user/user';
import { AuthService } from 'src/app/auth/auth.service';
import { NavController } from '@ionic/angular';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-drill',
  templateUrl: './drill.page.html',
  styleUrls: ['./drill.page.scss'],
})
export class DrillPage implements OnInit {

  constructor(
    private helper: TPHelper,
    private domSanitizer: DomSanitizer,
    private fs: FirestoreService,
    private auth: AuthService,
    private navCtrl: NavController,
    private router: Router,
  ) {
    this.setDrill();
  }

  view = 'description';
  trustedVideoUrl;
  user: User;
  drill = new Drill();
  readonly;

  ngOnInit() {
  }

  setDrill() {
    if (this.router.getCurrentNavigation().extras.state) {
      this.drill = this.router.getCurrentNavigation().extras.state.drill;
      this.readonly = true;
    }
  }
  ionViewWillEnter() {
    this.updateVideoUrl();
  }

  updateVideoUrl() {
    if (this.drill.videoUrl) {
      this.setSafeUrl();
    }
  }
  updateView(event) {
    let value = event.detail.value;
    this.view = value;
  }


  getVideo() {
    this.helper.showModal(VideoLibraryPage).then((result: any) => {
      if (result) {
        this.drill.videoUrl = result.videoUrl;
        this.drill.videoCoverUrl = result.videoCoverUrl
        this.drill.isYoutubeVideo = result.isYoutubeVideo;
        this.setSafeUrl();
      }
    })
  }



  async save() {
    this.drill.coachUid = (await this.auth.user).uid;
    this.drill.coach = null;
    if (this.drill.id) {
      this.updateDrill()
    } else {
      this.createDrill();
    }
  }


  deleteDrill() {
    this.helper.showConfirmationAlert("Delete Drill", "Are you sure you want to delete this drill? It can not be undone.", "Delete").then((result) => {
      if (result) {
        this.fs.delete(this.drill.path).then(() => {
          this.navCtrl.navigateBack("/drills")
        })
      }
    })
  }

  async updateDrill() {
    this.fs.update({ ...this.drill }, this.drill.path).then(() => {
      this.updatePublicDrill(this.drill);
      this.navCtrl.navigateBack('/drills')
    })
  }
  async createDrill() {
    this.fs.add('/users/' + (await this.auth.user).uid + "/drills", { ...this.drill }).then(() => {
      this.updatePublicDrill(this.drill);
      this.navCtrl.navigateBack('/drills')
    })
  }
  setSafeUrl() {

    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.drill.videoUrl);
    console.log(this.trustedVideoUrl);
  }

  updatePublicDrill(drill) {
    if (this.drill.public) {
      this.fs.set("/publicDrills/" + drill.id, { ...drill })
    } else {
      this.fs.delete("/publicDrills/" + drill.id).catch((error) => {
        //do nothing
      })
    }
  }


}

