import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class LoaderService {

  constructor(
    private http: HttpClient
  ) { }

  public loader(options: any){
    return this.http.get(`api/${options.type}`);
  }
}
