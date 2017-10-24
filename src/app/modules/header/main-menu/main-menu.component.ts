import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../core/data-services/loader.service';

@Component({
	selector: 'cic-main-menu',
	templateUrl: './main-menu.component.html',
	styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  public menu: any = [];

	constructor(private loaderService: LoaderService) {
    const options = {'id':1,'type':'menu'};
    this.loaderService.loader(options).subscribe(
      (response) => {
        this.menu = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

	ngOnInit() {
  }
}
