import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routedComponents = [LoginComponent];

const routes: Routes = [
	{path: '', pathMatch: 'full', redirectTo: '/login'},
	{path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [
  	CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})

export class AuthenticationRoutingModule { }
