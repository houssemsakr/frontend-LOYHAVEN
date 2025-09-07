import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsUsersComponent } from './details-users/details-users.component';

const routes: Routes = [
  {path:'',component:DetailsUsersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsUsersRoutingModule { }
