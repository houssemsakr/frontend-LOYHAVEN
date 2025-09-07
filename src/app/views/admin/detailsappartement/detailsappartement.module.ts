import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsappartementRoutingModule } from './detailsappartement-routing.module';
import { DetailsappartementComponent } from './detailsappartement/detailsappartement.component';


@NgModule({
  declarations: [
    DetailsappartementComponent
  ],
  imports: [
    CommonModule,
    DetailsappartementRoutingModule
  ]
})
export class DetailsappartementModule { }