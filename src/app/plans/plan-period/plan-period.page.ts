import { Component, OnInit } from '@angular/core';
import { TPHelper } from 'src/app/services/tp-helper';
import { AddPlayerGroupComponent } from '../add-player-group/add-player-group.component';
import { NavController } from '@ionic/angular';
import { DrillLibraryPage } from 'src/app/drills/drill-library/drill-library.page';

@Component({
  selector: 'app-plan-period',
  templateUrl: './plan-period.page.html',
  styleUrls: ['./plan-period.page.scss'],
})
export class PlanPeriodPage implements OnInit {

  constructor(
    private helper: TPHelper,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {

  }

  addGroup(event) {
    this.helper.showPopover({ component: AddPlayerGroupComponent, event: event })
  }

  viewDrill() {
    this.navCtrl.navigateForward("/view-drill")
  }

  addDrill() {
    this.helper.showModal(DrillLibraryPage, { hideMenu: true })
  }
}
