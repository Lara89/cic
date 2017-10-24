import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../core/data-services/loader.service';

@Component({
  selector: 'cic-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  public about: any = [];

  constructor(private loaderService: LoaderService) {
    const options = {'type':'about'};
    this.loaderService.loader(options).subscribe(
      (response) => {
        this.about = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  ngOnInit() {
  }

}
