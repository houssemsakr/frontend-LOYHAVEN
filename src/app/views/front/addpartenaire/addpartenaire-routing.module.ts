import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpartenaireComponent } from './addpartenaire/addpartenaire.component';

const routes: Routes = [
  {path:'',component:AddpartenaireComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddpartenaireRoutingModule { }
