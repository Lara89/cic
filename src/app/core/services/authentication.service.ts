import { Injectable } from '@angular/core';
import { LoggerService } from '../data-services/logger.service';
import { Token } from '../../shared/models/token.model';
import { LocalStorageService } from './local-storage.service';


@Injectable()
export class AuthenticationService {

  private token: Token;

  constructor(
    private loggerService: LoggerService,
    private localStorageService: LocalStorageService
  ) { }

  public login(credentials: object): Promise<any> {
    return new Promise((resolve, reject) => {
      this.loggerService.login(credentials)
        .subscribe(
          (response) => {
            this.token = <Token>response;
            this.localStorageService.set('token', this.token);

            resolve(this.token);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  /*public logout() {

  }

  public getLoggedUser(){

  }*/

}
