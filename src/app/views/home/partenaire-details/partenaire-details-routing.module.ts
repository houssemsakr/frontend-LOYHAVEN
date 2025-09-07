import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartenaireDetailsComponent } from './partenaire-details/partenaire-details.component';

const routes: Routes = [
  {path:'',component:PartenaireDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartenaireDetailsRoutingModule { }