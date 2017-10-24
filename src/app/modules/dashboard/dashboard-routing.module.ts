import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

export const dashRoutedComponents = [LandingComponent];

const routes: Routes = [
	{path: '', pathMatch: 'full', redirectTo: '/dashboard'},
	{path: 'dashboard', component: LandingComponent},
];

@NgModule({
  imports: [
  	CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})

export class DashboardRoutingModule { }
