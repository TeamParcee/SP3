import { Component, OnInit } from '@angular/core';
import { TPHelper } from 'src/app/services/tp-helper';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.page.html',
  styleUrls: ['./plan.page.scss'],
})
export class PlanPage implements OnInit {

  constructor(
    private helper: TPHelper,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  addPeriod() {
    this.navCtrl.navigateForward("/plan-period")
  }

  
}
