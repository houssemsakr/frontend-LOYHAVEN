import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsAppartementComponent } from './details-appartement/details-appartement.component';
const routes: Routes = [
  {path:'',component:DetailsAppartementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsAppartementRoutingModule { }




