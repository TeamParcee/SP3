import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { TPHelper } from 'src/app/services/tp-helper';
import { FirestoreService } from 'src/app/shared/firestore.service';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-change-coach',
  templateUrl: './change-coach.page.html',
  styleUrls: ['./change-coach.page.scss'],
})
export class ChangeCoachPage implements OnInit {

  constructor(
    private helper: TPHelper,
    private fs: FirestoreService,
  ) { }

  user: User;
  coaches: any[];
  searchCoaches: any[];
  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getCoaches();;
  }
  getCoaches() {
    firebase.firestore().collection("/users").where("role", "==", "headCoach").onSnapshot((snapshot) => {
      let coaches: any[] = snapshot.docs.map(doc => doc.data());
      let coachIndex = coaches.findIndex(c => c.uid == this.user.uid);
      // if (coachIndex > -1) {
      //   coaches.splice(coachIndex)
      // }
      this.coaches = coaches;
      this.searchCoaches = coaches;
    })
  }
  selectCoach(coach: User) {
    this.helper.inputAlert("Coach Team Code", "Please enter the team code for the Team", "Team Code").then((teamCode) => {
      if (teamCode) {
        if (coach.teamCode == teamCode) {
          this.updateCoach(coach);
        } else {
          this.helper.showError("Wrong team code entered");
        }
      }
    })
  }

  updateCoach(coach: User) {
    this.fs.update({ coachUid: coach.uid, role: 'member', sport: coach.sport }, this.user.path).then(() => {
      this.helper.showToast("Your coach has been updated", "bottom");
      this.helper.closeModal();
    })
  }

  updateCoaches(event) {

    let value = event.detail.value
    value = value.toLowerCase();
    this.coaches = this.searchCoaches.filter((coach: User) => {
      if (coach.fname.toLowerCase().includes(value) || coach.lname.toLowerCase().includes(value)) {
        return true
      }
    })
  }
  close() {
    this.helper.closeModal();;
  }
}
