import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupPageComponent} from './signup-page/signup-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {NewUserComponent} from './new-user/new-user.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import { GraphModuleComponent } from './graph-module/graph-module.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {UserActionComponent} from './user-action/user-action.component'
import { UpdateUserComponent } from './update-user/update-user.component';


const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'add-user', component: SignupPageComponent},
  { path: 'newuser', component: NewUserComponent },
  { path: 'userdetails', component:UserDetailsComponent },
  { path: 'graphmodule', component:GraphModuleComponent },
  {path: 'useraction',component:UserActionComponent},
  {path: 'updateuser/:id',component:UpdateUserComponent},


  { path: '**', component:PageNotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
