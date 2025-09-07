import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactusRoutingModule } from './contactus-routing.module';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactusComponent
  ],
  imports: [
    CommonModule,
    ContactusRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactusModule { }