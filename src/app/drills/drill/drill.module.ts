import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibraryDrillPageRoutingModule } from './drill-routing.module';

import { DrillPage } from './drill.page';
import { QuillModule } from 'ngx-quill'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuillModule.forRoot(),
    LibraryDrillPageRoutingModule
  ],
  declarations: [DrillPage]
})
export class LibraryDrillPageModule { }
