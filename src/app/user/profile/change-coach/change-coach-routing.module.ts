import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeCoachPage } from './change-coach.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeCoachPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeCoachPageRoutingModule {}
