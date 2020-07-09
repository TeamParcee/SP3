import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {

  }


  user: any = (function () {
    return new Promise((resolve) => {
      firebase.auth().onAuthStateChanged((user) => {
        return resolve(user);
      })
    })
  })();


}
