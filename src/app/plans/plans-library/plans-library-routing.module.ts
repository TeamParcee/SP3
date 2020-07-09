import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlansLibraryPage } from './plans-library.page';

const routes: Routes = [
  {
    path: '',
    component: PlansLibraryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlansLibraryPageRoutingModule {}
