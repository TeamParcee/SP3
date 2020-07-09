import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeGuard } from './welcome.guard';

const routes: Routes = [{
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
},

{
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomePageModule), canActivate: [WelcomeGuard]
}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
