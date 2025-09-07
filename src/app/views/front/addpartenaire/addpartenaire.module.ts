import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddpartenaireRoutingModule } from './addpartenaire-routing.module';
import { AddpartenaireComponent } from './addpartenaire/addpartenaire.component';



@NgModule({
  declarations: [
    AddpartenaireComponent 
  ],
  imports: [
    CommonModule,
    AddpartenaireRoutingModule,
    FormsModule
  ]
})
export class AddpartenaireModule { }