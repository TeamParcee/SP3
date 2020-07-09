import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FirestoreService } from 'src/app/shared/firestore.service';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.page.html',
  styleUrls: ['./complete-profile.page.scss'],
})
export class CompleteProfilePage implements OnInit {

  step = '1';

  user = new User();

  constructor(
    private firestore: FirestoreService,
    private navCtrl: NavController,
    private auth: AuthService,
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {

  }

 

  
  updateStep(event, value?) {

    this.step = event;
    if (value == 'headCoach' || value == 'member' || value == 'coach') {
      this.user.role = value;
    }
    if (value == 'football' || value == 'basketball' || value == 'baseball' || value == 'volleyball') {
      this.user.sport = value;
    }
  }


  async save() {
    this.user.coachUid = this.user.uid;
    this.firestore.update({ ...this.user }, '/users/' + (await this.auth.user).uid).then(() => {
      this.navCtrl.navigateForward("/home")
    })
  }

}
