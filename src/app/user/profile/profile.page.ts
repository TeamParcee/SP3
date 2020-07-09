import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { TPHelper } from 'src/app/services/tp-helper';
import { FirestoreService } from 'src/app/shared/firestore.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { User } from '../user';
import { ChangeCoachPage } from 'src/app/user/profile/change-coach/change-coach.page';
import { CropImagePage } from './crop-image/crop-image.page';
import { CreateTeamPage } from './create-team/create-team.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private auth: AuthService,
    private helper: TPHelper,
    private fs: FirestoreService,
  ) { }

  async ionViewWillEnter() {
    this.init();
  }
  ngOnInit() {
  }

  async init() {
    await this.getUser();
    await this.getCoach();
    this.setOriginalUser();
    this.checkCurrentUser();
  }
  showSkeleton = true;
  uid;
  user: User;
  isCurrentUser;
  originalUser;
  coach: User;
  imageFile;
  imagePreview;
  imageInput;

  setOriginalUser() {
    this.originalUser = { ...this.user }
  }
  async getUser() {
    return new Promise(async (resolve) => {
      if (!this.uid) {
        this.uid = (await this.auth.user).uid;
      }
      this.fs.getDoc("/users/" + this.uid).then((user) => {
        this.user = user as User;
        this.showSkeleton = false;
        return resolve()
      })
    })
  }

  async checkCurrentUser() {
    if (this.uid == (await this.auth.user).uid) {
      this.isCurrentUser = true;
    }
  }

  updateFname() {
    this.fs.update({ fname: this.user.fname }, this.user.path).then(() => {
      this.originalUser.fname = this.user.fname;
    })
  }

  updateEmailFirestore() {
    this.fs.update({ email: this.user.email }, this.user.path).then(() => {
      this.originalUser.email = this.user.email;
    })
  }

  updateLname() {
    this.fs.update({ lname: this.user.lname }, this.user.path).then(() => {
      this.originalUser.lname = this.user.lname;
    })
  }


  updateEmail() {
    firebase.auth().currentUser.updateEmail(this.user.email).then(() => {
      this.updateEmailFirestore()
    }).catch((error) => {
      this.helper.showError(error.message)
    })
  }

  getCoach() {
    return new Promise((resolve) => {
      this.fs.getDoc("/users/" + this.user.uid).then((coach) => {
        this.coach = coach as User;
        return resolve();
      })
    })
  }

  changeCoach() {
    this.helper.showModal(ChangeCoachPage, { user: this.user })
  }

  cropImage(event) {
    if (this.imageInput != null) {
      this.helper.showModal(CropImagePage, { imageChangedEvent: event }).then((result) => {
        this.imagePreview = result;
        this.imageInput = null;
      })
    }
  }

  cancelImage() {
    this.imagePreview = null;
  }
  saveImage() {
    this.fs.update({ photoUrl: this.imagePreview }, this.user.path).then(() => {
      this.user.photoUrl = this.imagePreview;
      this.imagePreview = null;
    })
  }

  createTeam() {
    this.helper.showModal(CreateTeamPage, { user: this.user }).then((result) => {
      if (result) {
        this.init();
      }
    })
  }
}
