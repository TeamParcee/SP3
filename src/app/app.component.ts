import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuCtrl: MenuController,
  ) {
    this.initializeApp();
  }

  showMenu = false;
  initializeApp() {
    console.log('adiontae')
    this.isLoggedIn();
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  closeMenu() {
    this.menuCtrl.close()
  }

  async isLoggedIn() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.showMenu = true;
      } else {
        this.showMenu = false;
      }
    })
  }
}
