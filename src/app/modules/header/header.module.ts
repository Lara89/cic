import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CicHeaderComponent } from './cic-header/cic-header.component';
import { LogoComponent } from './logo/logo.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ActionsMenuComponent } from './actions-menu/actions-menu.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    CicHeaderComponent,
    LogoComponent,
    MainMenuComponent,
    ActionsMenuComponent
  ],
  exports: [
    CicHeaderComponent,
    LogoComponent
  ]
})
export class HeaderModule { }
