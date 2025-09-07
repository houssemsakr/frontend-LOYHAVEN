import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsUsersRoutingModule } from './details-users-routing.module';
import { DetailsUsersComponent } from './details-users/details-users.component';


@NgModule({
  declarations: [
    DetailsUsersComponent
  ],
  imports: [
    CommonModule,
    DetailsUsersRoutingModule
  ]
})
export class DetailsUsersModule { }

