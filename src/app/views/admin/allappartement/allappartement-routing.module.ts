import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllappartementComponent } from './allappartement.component';

const routes: Routes = [
  {path:'',component:AllappartementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllappartementRoutingModule { }
