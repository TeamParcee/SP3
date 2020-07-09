import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrillLibraryPage } from './drill-library.page';

const routes: Routes = [
  {
    path: '',
    component: DrillLibraryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrillLibraryPageRoutingModule {}
