import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrillLibraryPageRoutingModule } from './drill-library-routing.module';

import { DrillLibraryPage } from './drill-library.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { DrillLibrarySkeletonComponent } from './skeleton/drill-library-skeleton/drill-library-skeleton.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    DrillLibraryPageRoutingModule,

  ],
  declarations: [DrillLibraryPage, DrillLibrarySkeletonComponent]
})
export class DrillLibraryPageModule { }
