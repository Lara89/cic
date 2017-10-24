import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AuthenticationRoutingModule, routedComponents } from './authentication-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AuthenticationRoutingModule
  ],
  declarations: [
  	routedComponents
  ]
})
export class AuthenticationModule { }
