import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { HeaderModule } from './modules/header/header.module';
import { FooterModule } from './modules/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AuthenticationModule,
    DashboardModule,
    HeaderModule,
    FooterModule,
    AppRoutingModule //Always at the bottom of import
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
