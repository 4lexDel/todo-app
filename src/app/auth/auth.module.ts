import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ]
})
export class AuthModule { }
