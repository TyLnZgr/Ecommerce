import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';
import { MustMatchDirective } from '../helper/must-match.directive';

@NgModule({
  declarations: [LoginComponent, SignupComponent, MustMatchDirective],
  imports: [RouterModule, FormsModule, CommonModule],
  exports: [LoginComponent, SignupComponent],
})
export class AuthModule {}
