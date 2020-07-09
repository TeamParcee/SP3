import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeCoachPageRoutingModule } from './change-coach-routing.module';

import { ChangeCoachPage } from './change-coach.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeCoachPageRoutingModule
  ],
  declarations: [ChangeCoachPage]
})
export class ChangeCoachPageModule {}
