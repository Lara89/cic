import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { LoaderService } from '../../core/data-services/loader.service';

@Component({
  selector: 'cic-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  @Input() columnType: string;
  @Output()	columnClass = new EventEmitter<string>();


  public data: any = [];

  constructor(private loaderService: LoaderService) {
  }

  ngOnInit() {
    if(this.columnType != undefined){
      let options = {'type':this.columnType};
      this.loaderService.loader(options).subscribe(
        (response) => {
          this.data = response;
          this.columnClass.emit(this.data.cssClass);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

}
