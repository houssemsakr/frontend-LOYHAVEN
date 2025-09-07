import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { AddcolocationRoutingModule } from './addcolocation-routing.module';
import { AddcolocationComponent } from './addcolocation/addcolocation.component';


@NgModule({
  declarations: [
    AddcolocationComponent
  ],
  imports: [
    CommonModule,
    AddcolocationRoutingModule,
    FormsModule
  ]
})
export class AddcolocationModule { }