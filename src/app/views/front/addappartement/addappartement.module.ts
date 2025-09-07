import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddappartementComponent } from './addappartement.component';
import { AddappartementRoutingModule } from './addappartement-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddappartementComponent
  ],
  imports: [
    CommonModule,
    AddappartementRoutingModule,
    FormsModule
  ]
})
export class AddappartementModule { }
