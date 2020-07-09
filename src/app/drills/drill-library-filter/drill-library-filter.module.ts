import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrillLibraryFilterPageRoutingModule } from './drill-library-filter-routing.module';

import { DrillLibraryFilterPage } from './drill-library-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrillLibraryFilterPageRoutingModule
  ],
  declarations: [DrillLibraryFilterPage]
})
export class DrillLibraryFilterPageModule {}
