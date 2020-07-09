import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EdutechRoutingModule } from './edutech-routing.module';
import { EdutechLoginComponent } from './edutech-login/edutech-login.component';
import { EdutechSignupComponent } from './edutech-signup/edutech-signup.component';


@NgModule({
  declarations: [EdutechLoginComponent, EdutechSignupComponent],
  imports: [
    CommonModule,
    EdutechRoutingModule
  ]
})
export class EdutechModule { }
