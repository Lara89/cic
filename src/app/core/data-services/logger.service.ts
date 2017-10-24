import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from '../../shared/models/token.model';

@Injectable()
export class LoggerService {

  constructor(
    private http: HttpClient
  ) { }

  public login(credentials: any){
    return  this.http.get<Token>(`api/token/${credentials.email}`);
  }
}
