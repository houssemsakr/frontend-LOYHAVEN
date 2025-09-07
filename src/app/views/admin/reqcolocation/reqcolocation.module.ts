import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReqcolocationRoutingModule } from './reqcolocation-routing.module';
import { ReqcolocationComponent } from './reqcolocation/reqcolocation.component';


@NgModule({
  declarations: [
    ReqcolocationComponent
  ],
  imports: [
    CommonModule,
    ReqcolocationRoutingModule
  ]
})
export class ReqcolocationModule { }


