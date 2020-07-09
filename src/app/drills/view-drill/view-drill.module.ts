import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewDrillPageRoutingModule } from './view-drill-routing.module';

import { ViewDrillPage } from './view-drill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewDrillPageRoutingModule
  ],
  declarations: [ViewDrillPage]
})
export class ViewDrillPageModule {}
