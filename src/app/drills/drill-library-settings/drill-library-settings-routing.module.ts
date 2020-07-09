import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrillLibrarySettingsPage } from './drill-library-settings.page';

const routes: Routes = [
  {
    path: '',
    component: DrillLibrarySettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrillLibrarySettingsPageRoutingModule {}
