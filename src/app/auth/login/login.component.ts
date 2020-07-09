import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { NavController } from '@ionic/angular';
import { TPHelper } from 'src/app/services/tp-helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(
    private navCtrl: NavController,
    private helper: TPHelper,
  ) { }
  user = { email: "", pword: "" };
  @Output() updateView = new EventEmitter();
  ngOnInit() { }


  updateViewEmit(view) {
    this.updateView.emit(view);
  }

  login() {
    firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.pword).then(() => {
      this.navCtrl.navigateForward("/home")
    }).catch((error) => {
      this.helper.showError(error.message)
    })
  }
}
