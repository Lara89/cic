import { LoaderService } from './../../core/data-services/loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cic-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  public testimonials: any = [];

  constructor(private loaderService: LoaderService) {
    const options = {'type':'testimonials'};
    this.loaderService.loader(options).subscribe(
      (response) => {
        this.testimonials = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnInit() {

  }

}
