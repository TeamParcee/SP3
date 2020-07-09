import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import { VideoLibraryPageModule } from './drills/video-library/video-library.module';
import { AddPlayerGroupComponent } from './plans/add-player-group/add-player-group.component';
import { EventPageModule } from './schedule/event/event.module';
import { PlansLibraryPageModule } from './plans/plans-library/plans-library.module';
import { DrillLibraryPageModule } from './drills/drill-library/drill-library.module';
import { ChangeCoachPageModule } from './user/profile/change-coach/change-coach.module';
import { CropImagePageModule } from './user/profile/crop-image/crop-image.module';
import { CreateTeamPageModule } from './user/profile/create-team/create-team.module';

var firebaseConfig = {
  apiKey: "AIzaSyAPqNTiU2hhLWAVLxb2DQMQL_feJzhI9aM",
  authDomain: "sportsplanner-tp2.firebaseapp.com",
  databaseURL: "https://sportsplanner-tp2.firebaseio.com",
  projectId: "sportsplanner-tp2",
  storageBucket: "sportsplanner-tp2.appspot.com",
  messagingSenderId: "536563369664",
  appId: "1:536563369664:web:ad1208f27de388c35b0f25",
  measurementId: "G-8RKQ6PWBGP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

@NgModule({
  declarations: [
    AppComponent,
    AddPlayerGroupComponent,
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AuthRoutingModule,
    VideoLibraryPageModule,
    EventPageModule,
    PlansLibraryPageModule,
    ChangeCoachPageModule,
    DrillLibraryPageModule,
    CreateTeamPageModule,
    CropImagePageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
