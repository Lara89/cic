import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Error404Component } from './../core/errors/error-404/error-404.component';
import { AuthenticationService } from './services/authentication.service';
import { LoggerService } from './data-services/logger.service';
import { MainService } from './services/main.service';
import { LoaderService } from './data-services/loader.service';
import { LocalStorageService } from './services/local-storage.service';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
    FormsModule,
    HttpClientModule
	],
	declarations: [
		Error404Component
	],
	exports: [
		CommonModule,
		RouterModule,
		FormsModule,
		Error404Component
	],
	providers: [HttpClient, AuthenticationService, LoggerService, MainService,LoaderService,LocalStorageService]
})
export class CoreModule { }
