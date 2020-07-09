import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./schedule/home/home.module').then( m => m.HomePageModule), canActivate: [AuthGuard]
  },  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'drills',
    loadChildren: () => import('./drills/drill-library/drill-library.module').then( m => m.DrillLibraryPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'plans',
    loadChildren: () => import('./plans/plans-library/plans-library.module').then( m => m.PlansLibraryPageModule),  canActivate: [AuthGuard]
  },
  {
    path: 'drill-library-filter',
    loadChildren: () => import('./drills/drill-library-filter/drill-library-filter.module').then( m => m.DrillLibraryFilterPageModule)
  },
  {
    path: 'drill-library-settings',
    loadChildren: () => import('./drills/drill-library-settings/drill-library-settings.module').then( m => m.DrillLibrarySettingsPageModule)
  },
  {
    path: 'drill',
    loadChildren: () => import('./drills/drill/drill.module').then( m => m.LibraryDrillPageModule),  canActivate: [AuthGuard]
  },
  {
    path: 'video-library',
    loadChildren: () => import('./drills/video-library/video-library.module').then( m => m.VideoLibraryPageModule),  canActivate: [AuthGuard]
  },
  {
    path: 'plan',
    loadChildren: () => import('./plans/plan/plan.module').then( m => m.PlanPageModule),  canActivate: [AuthGuard]
  },
  {
    path: 'plan-period',
    loadChildren: () => import('./plans/plan-period/plan-period.module').then( m => m.PlanPeriodPageModule)
  },
  {
    path: 'view-drill',
    loadChildren: () => import('./drills/view-drill/view-drill.module').then( m => m.ViewDrillPageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./schedule/event/event.module').then( m => m.EventPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./user/profile/profile.module').then( m => m.ProfilePageModule),  canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    loadChildren: () => import('./user/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'complete-profile',
    loadChildren: () => import('./user/complete-profile/complete-profile.module').then( m => m.CompleteProfilePageModule)
  },
  {
    path: 'change-coach',
    loadChildren: () => import('./user/profile/change-coach/change-coach.module').then( m => m.ChangeCoachPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
