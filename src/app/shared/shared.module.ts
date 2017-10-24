import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OurLocationComponent } from './our-location/our-location.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ColumnComponent } from './column/column.component';
import { KeepHtmlPipe } from './pipes/keep-html.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    OurLocationComponent,
    TestimonialsComponent,
    ColumnComponent,
    KeepHtmlPipe
  ],
  exports: [
  	CommonModule,
  	RouterModule,
  	FormsModule,
    OurLocationComponent,
    TestimonialsComponent,
    ColumnComponent,
    KeepHtmlPipe
  ]
})
export class SharedModule { }
