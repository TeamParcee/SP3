import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanPeriodPage } from './plan-period.page';

const routes: Routes = [
  {
    path: '',
    component: PlanPeriodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanPeriodPageRoutingModule {}
