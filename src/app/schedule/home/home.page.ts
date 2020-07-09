import { Component } from '@angular/core';
import { MenuController, IonSplitPane } from '@ionic/angular';
import { TPHelper } from 'src/app/services/tp-helper';
import { EventPage } from '../event/event.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private menuCtrl: MenuController,
    private helper: TPHelper
  ) { }

  skeleton = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",];


  view;
  addEvent() {
    this.helper.showModal(EventPage)
  }

  updateView(event){
    let value = event.detail.value;
    this.view = value;
  }
}
