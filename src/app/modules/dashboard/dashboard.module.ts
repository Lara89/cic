import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DashboardRoutingModule, dashRoutedComponents } from './dashboard-routing.module';
import { OurTeamComponent } from './our-team/our-team.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [
  	dashRoutedComponents,
  	OurTeamComponent,
  	OurServicesComponent,
  	AboutUsComponent
  ]
})
export class DashboardModule { }
