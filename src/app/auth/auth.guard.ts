import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { NavController } from '@ionic/angular';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private navCtrl: NavController,
    private auth: AuthService,
  ) {

  }
  async canActivate() {
    return await this.isUserSignedIn();
  }

  isUserSignedIn(): Promise<boolean> {
    return new Promise((resolve) => {
      firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
          return resolve(await this.profileComplete() as any);
        } else {
          // return resolve(false);
          this.navCtrl.navigateRoot("/welcome")

        }
      })
    })
  }

  async profileComplete() {
    return new Promise(async (resolve) => {
      firebase.firestore().doc("/users/" + (await this.auth.user).uid).get().then((userSnap) => {
        let user = userSnap.data();
        if (!user.fname || !user.lname || !user.role || !user.teamCode) {
          this.navCtrl.navigateForward("/complete-profile")
        } else {
          return resolve(true);
        }
      })
    })
  }
}
