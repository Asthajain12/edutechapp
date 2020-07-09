import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{EdutechLoginComponent} from './edutech-login/edutech-login.component'
import{EdutechSignupComponent} from './edutech-signup/edutech-signup.component'

const routes: Routes = [
  {path:'login',component:EdutechLoginComponent},
  {path:'signup',component:EdutechSignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EdutechRoutingModule { }
