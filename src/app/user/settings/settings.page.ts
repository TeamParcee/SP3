import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { TPHelper } from 'src/app/services/tp-helper';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    private helper: TPHelper,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }


  logout() {
    this.helper.showConfirmationAlert("Log Out", "Are you sure you want to log out?", "Log Out").then(async (result) => {
      if (result) {
        await firebase.auth().signOut();
        this.navCtrl.navigateBack("/welcome")
      }
    })
  }

}
