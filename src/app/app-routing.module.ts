import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Error404Component } from './core/errors/error-404/error-404.component';

const routes: Routes = [
	{path: '', pathMatch: 'full', redirectTo: 'auth'},
	{path: 'auth', loadChildren: './modules/authentication/authentication.module#AuthenticationModule'},
	{path: 'dashboard', loadChildren: './modules/dashboard/dashboard.module#DashboardModule'},
	{path: '**', component: Error404Component}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
