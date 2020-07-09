import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { TPHelper } from 'src/app/services/tp-helper';
import { DrillLibraryFilterPage } from '../drill-library-filter/drill-library-filter.page';
import { DrillLibrarySettingsPage } from '../drill-library-settings/drill-library-settings.page';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-drill-library',
  templateUrl: './drill-library.page.html',
  styleUrls: ['./drill-library.page.scss'],
})
export class DrillLibraryPage implements OnInit {

  constructor(
    private menuCtrl: MenuController,
    private helper: TPHelper,
    private navCtrl: NavController,
    private auth: AuthService,
  ) { }


  hideMenu = false;
  uid;
  drills;
  showSkeleton = true;
  user;
  view = "my";
  ngOnInit() {
  }


  getCoach(drill) {
    return new Promise((resolve) => {
      firebase.firestore().doc("/users/" + drill.coachUid).get().then((snapshot) => {
        return resolve(snapshot.data())
      })
    })
  }

  async setUser() {
    return new Promise((resolve) => {
      firebase.firestore().doc("/users/" + this.uid).get().then((snapshot) => {
        this.user = snapshot.data();
        return resolve()
      })
    })
  }
  async ionViewWillEnter() {
    this.uid = (await this.auth.user).uid;
    await this.setUser()
    this.getMyDrills();
  }

  showFilter() {
    this.helper.showModal(DrillLibraryFilterPage)
  }

  showSettings() {
    this.helper.showModal(DrillLibrarySettingsPage)
  }

  newDrill() {
    this.navCtrl.navigateForward("drill")
  }


  getMyDrills() {
    firebase.firestore().collection("/users/" + this.uid + "/drills").onSnapshot((snapshot) => {
      let drills = snapshot.docs.map(doc => doc.data());
      let drillsWithCoach = [];
      drills.forEach(async (drill) => {
        drill.coach = await this.getCoach(drill);
        drillsWithCoach.push(drill)
      })
      this.drills = drillsWithCoach;
      this.showSkeleton = false;
    })
  }


  getPublicDrills() {
    firebase.firestore().collection("/publicDrills/").onSnapshot((snapshot) => {
      let drills = snapshot.docs.map(doc => doc.data());
      let drillsWithCoach = [];
      drills.forEach(async (drill) => {
        drill.coach = await this.getCoach(drill);
        drillsWithCoach.push(drill)
      })
      this.drills = drillsWithCoach;
      this.showSkeleton = false;
    })
  }
  viewDrill(drill) {
    this.navCtrl.navigateForward("drill", { state: { drill: drill } })
  }

  segmentChanged(event) {
    let value = event.detail.value;
    if (value == 'my') {
      this.getMyDrills();
    }

    if (value == 'public') {
      this.getPublicDrills();
    }
  }


}
