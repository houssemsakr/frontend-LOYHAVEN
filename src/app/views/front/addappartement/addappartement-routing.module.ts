import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddappartementComponent } from './addappartement.component';

const routes: Routes = [
  {path:'', component:AddappartementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddappartementRoutingModule { }
