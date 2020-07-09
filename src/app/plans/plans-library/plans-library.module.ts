import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlansLibraryPageRoutingModule } from './plans-library-routing.module';

import { PlansLibraryPage } from './plans-library.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { SkeletonPlansLibraryComponent } from '../skeleton/skeleton-plans-library/skeleton-plans-library.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PlansLibraryPageRoutingModule,
    
  ],
  declarations: [PlansLibraryPage, SkeletonPlansLibraryComponent,]
})
export class PlansLibraryPageModule { }
