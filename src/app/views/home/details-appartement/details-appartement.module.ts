import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsAppartementRoutingModule } from './details-appartement-routing.module';
import {DetailsAppartementComponent } from './/details-appartement/details-appartement.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DetailsAppartementComponent
  ],
  imports: [
    CommonModule,
    DetailsAppartementRoutingModule,
    FormsModule
  ]
})
export class DetailsAppartementModule { }




