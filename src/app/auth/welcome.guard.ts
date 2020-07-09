import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class WelcomeGuard implements CanActivate {
  constructor(private navCtrl: NavController) { }
  async canActivate() {
    return await this.isUserSignedIn();
  }

  isUserSignedIn(): Promise<boolean> {
    return new Promise((resolve) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.navCtrl.navigateRoot("/home")
          // return resolve(true);
        } else {
          return resolve(true);

        }
      })
    })
  }

}
