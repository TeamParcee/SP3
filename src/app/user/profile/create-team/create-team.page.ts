import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/shared/firestore.service';
import { AuthService } from 'src/app/auth/auth.service';
import { TPHelper } from 'src/app/services/tp-helper';


@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.page.html',
  styleUrls: ['./create-team.page.scss'],
})
export class CreateTeamPage implements OnInit {

  constructor(
    private fs: FirestoreService,
    private auth: AuthService,
    private helper: TPHelper,
  ) { }

  user;
  step = '1';

  ngOnInit() {
  }



  updateStep(event, value?) {

    this.step = event;
    if (value == 'football' || value == 'basketball' || value == 'baseball' || value == 'volleyball') {
      this.user.sport = value;
    }
  }


  async save() {
    this.user.coachUid = this.user.uid;
    this.user.role = 'headCoach';
    this.fs.update({ ...this.user }, '/users/' + (await this.auth.user).uid).then(() => {
      this.helper.closeModal(true)
    })
  }



}
