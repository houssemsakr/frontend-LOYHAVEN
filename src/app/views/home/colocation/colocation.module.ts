import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ColocationRoutingModule } from './colocation-routing.module';
import { ColocationComponent } from './colocation/colocation.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ColocationComponent
  ],
  imports: [
    CommonModule,
    ColocationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ColocationModule { }



