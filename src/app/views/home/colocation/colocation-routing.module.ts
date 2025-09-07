import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColocationComponent } from './colocation/colocation.component';

const routes: Routes = [
  {path:'',component:ColocationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColocationRoutingModule { }

