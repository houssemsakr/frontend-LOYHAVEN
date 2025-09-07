import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartenaireDetailsRoutingModule } from './partenaire-details-routing.module';
import { PartenaireDetailsComponent } from './partenaire-details/partenaire-details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PartenaireDetailsComponent
  ],
  imports: [
    CommonModule,
    PartenaireDetailsRoutingModule,
    FormsModule
  ]
})
export class PartenaireDetailsModule { }



