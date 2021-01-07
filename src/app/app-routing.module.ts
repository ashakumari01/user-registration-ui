import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddressdetailComponent } from './addressdetail/addressdetail.component';
import { PasswordComponent } from './password/password.component';

const routes: Routes = [
{path:'',redirectTo:'login',pathMatch:"full"},
{path:'login',component:LoginComponent},
{path:'registration',component:RegistrationComponent},
{path:'addressdetail',component:AddressdetailComponent},
{path:'password',component:PasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
