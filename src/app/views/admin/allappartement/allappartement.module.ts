import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AllappartementComponent } from './allappartement.component';

import { AllappartementRoutingModule } from './allappartement-routing.module';


@NgModule({
  declarations: [
    AllappartementComponent
  ],
  imports: [
    CommonModule,
    AllappartementRoutingModule,
    FormsModule
  ]
})
export class AllappartementModule { }
