import { Component, OnInit } from '@angular/core';
import { LoaderService } from './../../../core/data-services/loader.service';

@Component({
  selector: 'cic-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {
  public team: any = [];

  constructor(private loaderService: LoaderService) {
    const options = {'type':'ourTeam'};
    this.loaderService.loader(options).subscribe(
      (response) => {
        this.team = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  ngOnInit() {
  }

}
