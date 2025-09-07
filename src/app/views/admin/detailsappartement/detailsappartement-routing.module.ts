import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsappartementComponent } from './detailsappartement/detailsappartement.component';
const routes: Routes = [
  {path:'',component:DetailsappartementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsappartementRoutingModule { }