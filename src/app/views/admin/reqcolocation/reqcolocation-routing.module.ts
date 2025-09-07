import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReqcolocationComponent } from './reqcolocation/reqcolocation.component';

const routes: Routes = [
  {path:'',component:ReqcolocationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReqcolocationRoutingModule { }

