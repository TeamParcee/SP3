import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanPeriodPageRoutingModule } from './plan-period-routing.module';

import { PlanPeriodPage } from './plan-period.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanPeriodPageRoutingModule
  ],
  declarations: [PlanPeriodPage]
})
export class PlanPeriodPageModule {}
