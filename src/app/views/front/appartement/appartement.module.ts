import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppartementRoutingModule } from './appartement-routing.module';
import { AppartementComponent } from './appartement.component';



@NgModule({
  declarations: [
    AppartementComponent
  ],
  imports: [
    CommonModule,
    AppartementRoutingModule,
    FormsModule
  ]
})
export class AppartementModule { }


