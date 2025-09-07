import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReqpartenaireRoutingModule } from './reqpartenaire-routing.module';
import { ReqpartenaireComponent } from './reqpartenaire/reqpartenaire.component';

@NgModule({
  declarations: [
    ReqpartenaireComponent
  ],
  imports: [
    CommonModule,
    ReqpartenaireRoutingModule
  ]
})
export class ReqpartenaireModule { }