import { Injectable } from '@angular/core';
import { LoaderService } from '../data-services/loader.service';

@Injectable()
export class MainService {
  public data: any;

  constructor(
    private loaderService: LoaderService
  ) { }

  public loadMenu(options: object) {
    this.loaderService.loader(options)
      .subscribe(
        (response) => {
          this.data = response;
          //console.log(this.data);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
