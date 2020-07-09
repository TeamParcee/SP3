import { Component, OnInit } from '@angular/core';
import { TPHelper } from 'src/app/services/tp-helper';
import { PlansLibraryPage } from 'src/app/plans/plans-library/plans-library.page';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {

  constructor(
    private helper: TPHelper,
  ) { }

  view = "practice";

  ngOnInit() {
  }

  updateView(event) {
    let value = event.detail.value;
    this.view = value;
  }

  addPlan() {
    this.helper.showModal(PlansLibraryPage, { hideMenu: true })
  }
}
