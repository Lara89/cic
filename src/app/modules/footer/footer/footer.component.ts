import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../core/data-services/loader.service';

@Component({
  selector: 'cic-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public footer: any = [];
  public columns: any = [];
  public cssClass: any;

  constructor(private loaderService: LoaderService) {
    const options = {'type':'footer'};
    this.loaderService.loader(options).subscribe(
      (response) => {
        this.footer = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public onCssClass(event: any) {
    this.cssClass = event;
  }

  ngOnInit() {
  }

}
