import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { TPHelper } from 'src/app/services/tp-helper';
import { PlanPage } from '../plan/plan.page';

@Component({
  selector: 'app-plans-library',
  templateUrl: './plans-library.page.html',
  styleUrls: ['./plans-library.page.scss'],
})
export class PlansLibraryPage implements OnInit {

  constructor(
    private helper: TPHelper,
    private navCtrl: NavController,

  ) { }

  ngOnInit() {
  }

  hideMenu = false;


  addPlan() {
    this.navCtrl.navigateForward("/plan")
  }
}
