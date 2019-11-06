import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'net-worth',
    loadChildren: './net-worth/net-worth.module#NetWorthModule'
  },
  {
    path: 'salary',
    loadChildren: './salary/salary.module#SalaryModule'
  },
  { path: 'welcome', component: WelcomeComponent },
  {
    path: '**',
    loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
