import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layout/auth-admin-layout/auth-admin-layout.component';
import { FrontLayoutComponent } from './layout/front-layout/front-layout.component';
import { GuardadminGuard } from './views/guards/guardadmin.guard';
import { GuarduserGuard } from './views/guards/guarduser.guard';
import { NoguarduserGuard } from './views/guards/noguarduser.guard';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';

const routes: Routes = [
{path:'user',component:FrontLayoutComponent,children:[
  {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
  {path:'addappartement',loadChildren:()=>import('./views/front/addappartement/addappartement.module').then(m=>m.AddappartementModule),canActivateChild:[GuarduserGuard]},
  {path:'addpartenaire',loadChildren:()=>import('./views/front/addpartenaire/addpartenaire.module').then(m=>m.AddpartenaireModule),canActivateChild:[GuarduserGuard]},
  {path:'addcolocation',loadChildren:()=>import('./views/front/addcolocation/addcolocation.module').then(m=>m.AddcolocationModule),canActivateChild:[GuarduserGuard]},
 
]},
{path:'admin',component:AdminLayoutComponent,canActivate:[GuardadminGuard],children:[
  {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
 {path:'allappartement',loadChildren:()=>import('./views/admin/allappartement/allappartement.module').then(m=>m.AllappartementModule)},
  {path:'detailsappartement/:id',loadChildren:()=>import('./views/admin/detailsappartement/detailsappartement.module').then(m=>m.DetailsappartementModule)},
  {path:'partenaire',loadChildren:()=>import('./views/admin/partenaire/partenaire.module').then(m=>m.PartenaireModule)},
  {path:'detailsusers/:id',loadChildren:()=>import('./views/admin/details-users/details-users.module').then(m=>m.DetailsUsersModule)},
  {path:'users',loadChildren:()=>import('./views/admin/users/users.module').then(m=>m.UsersModule)},
  {path:'Request',loadChildren:()=>import('./views/admin/request/request.module').then(m=>m.RequestModule)},
  {path:'Requestcol',loadChildren:()=>import('./views/admin/reqcolocation/reqcolocation.module').then(m=>m.ReqcolocationModule)},
  {path:'Requestpart',loadChildren:()=>import('./views/admin/reqpartenaire/reqpartenaire.module').then(m=>m.ReqpartenaireModule)},
 
]},



{path:'admin/login',component:AuthAdminLayoutComponent},

{path:'',component:HomeLayoutComponent,children:[
  {path:'',loadChildren:()=>import('./views/home/homepage/homepage.module').then(m=>m.HomepageModule)},
  {path:'departement',loadChildren:()=>import('./views/home/departement/departement.module').then(m=>m.DepartementModule)},
  {path:'appartement-details/:id',loadChildren:()=>import('./views/home/details-appartement/details-appartement.module').then(m=>m.DetailsAppartementModule)},
  {path:'partenaire-details/:id',loadChildren:()=>import('./views/home/partenaire-details/partenaire-details.module').then(m=>m.PartenaireDetailsModule)},
  {path:'partenaire',loadChildren:()=>import('./views/home/partenaire/partenaire.module').then(m=>m.PartenaireModule)},
  {path:'colocation',loadChildren:()=>import('./views/home/colocation/colocation.module').then(m=>m.ColocationModule)},
  {path:'signup',loadChildren:()=>import('./views/home/signup/signup.module').then(m=>m.SignupModule)},
  {path:'login',loadChildren:()=>import('./views/home/login/login.module').then(m=>m.LoginModule)},
  {path:'contactus',loadChildren:()=>import('./views/home/contactus/contactus.module').then(m=>m.ContactusModule)},
]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
