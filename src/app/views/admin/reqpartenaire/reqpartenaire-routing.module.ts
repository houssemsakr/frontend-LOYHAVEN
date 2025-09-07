import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReqpartenaireComponent } from './reqpartenaire/reqpartenaire.component';

const routes: Routes = [
  {path:'',component:ReqpartenaireComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReqpartenaireRoutingModule { }
