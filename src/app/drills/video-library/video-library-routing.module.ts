import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoLibraryPage } from './video-library.page';

const routes: Routes = [
  {
    path: '',
    component: VideoLibraryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoLibraryPageRoutingModule {}
