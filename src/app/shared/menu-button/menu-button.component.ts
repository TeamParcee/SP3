import { Component, OnInit } from '@angular/core';
import { IonSplitPane, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent implements OnInit {

  constructor(
    private menuCtrl: MenuController,
  ) { }

  ngOnInit() { }


  closeMenu() {
    let splitPane: IonSplitPane = document.getElementById("splitPane") as unknown as IonSplitPane;
    splitPane.disabled = !splitPane.disabled;
    this.menuCtrl.close();
  }
}
