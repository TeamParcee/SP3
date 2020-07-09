import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrillLibraryFilterPage } from './drill-library-filter.page';

const routes: Routes = [
  {
    path: '',
    component: DrillLibraryFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrillLibraryFilterPageRoutingModule {}
