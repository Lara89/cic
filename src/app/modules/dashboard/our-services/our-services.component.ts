import { Component, OnInit } from '@angular/core';
import { LoaderService } from './../../../core/data-services/loader.service';

@Component({
  selector: 'cic-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {
  public services: any = [];

  constructor(private loaderService: LoaderService) {
    const options = {'type':'services'};
    this.loaderService.loader(options).subscribe(
      (response) => {
        this.services = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  ngOnInit() {
  }
}
