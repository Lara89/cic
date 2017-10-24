import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
	selector: 'cic-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	constructor(
		private router: Router,
		private authenticationService: AuthenticationService
	) { }

	ngOnInit() {

	}

	public login(credentials: any, isValid: boolean) {

	if (!isValid) {
		return false;
	}

	this.authenticationService.login(credentials)
		.then(() => {
		  this.router.navigate(['/dashboard']);
		})
		.catch((error) => {
		  console.log(error);
		});
	}
}
