import { Component, OnInit } from '@angular/core';
import { LoaderService } from './../../core/data-services/loader.service';

@Component({
  selector: 'cic-our-location',
  templateUrl: './our-location.component.html',
  styleUrls: ['./our-location.component.scss']
})
export class OurLocationComponent implements OnInit {
  public locations: any = [];

  constructor(private loaderService: LoaderService) {
    const options = {'type':'locations'};
    this.loaderService.loader(options).subscribe(
      (response) => {
        this.locations = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  ngOnInit() {
  }
}
