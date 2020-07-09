import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoLibraryPageRoutingModule } from './video-library-routing.module';

import { VideoLibraryPage } from './video-library.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoLibraryPageRoutingModule
  ],
  declarations: [VideoLibraryPage]
})
export class VideoLibraryPageModule {}
