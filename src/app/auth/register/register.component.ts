import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { NavController } from '@ionic/angular';
import { TPHelper } from 'src/app/services/tp-helper';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(
    private helper: TPHelper,
    private navCtrl: NavController,
  ) { }

  @Output() updateView = new EventEmitter();


  user = { email: '', cemail: '', cpword: '', pword: '' };
  ngOnInit() { }


  updateViewEmit(view) {
    this.updateView.emit(view);
  }

  register() {
    if (this.user.email != this.user.cemail) {
      this.helper.showError("The emails do not match");
        return
    }

    if (this.user.pword != this.user.cpword) {
      this.helper.showError("The passwords do not match");
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.pword).then((result) => {
      this.addUserToDatabase(result.user).then(() => {
        this.navCtrl.navigateForward("/home");
      })
    }).catch((error) => {
      this.helper.showError(error.message)
    })
  }

  addUserToDatabase(user) {
    return new Promise((resolve) => {
      firebase.firestore().doc("/users/" + user.uid).set({ uid: user.uid, email: user.email, photoUrl: "../../../assets/user.jpg" }).then(() => {
        return resolve();
      }).catch((error) => {
        this.helper.showError(error.message)
      })
    })

  }
}
