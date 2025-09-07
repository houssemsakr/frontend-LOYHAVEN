import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcolocationComponent } from './addcolocation/addcolocation.component';

const routes: Routes = [
  {path:'',component:AddcolocationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddcolocationRoutingModule { }



