import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartenaireRoutingModule } from './partenaire-routing.module';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PartenaireComponent
  ],
  imports: [
    CommonModule,
    PartenaireRoutingModule,
    FormsModule
  ]
})
export class PartenaireModule { }
