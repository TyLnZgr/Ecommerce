import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  user: any = {
    email: '',
    password: '',
    confirmPassword: '',
  };
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  signup() {
    this.authService
      .signup(this.user.email, this.user.password)
      .then(() => {
        this.router.navigate(['/products']);
        this.toastr.success('You are now logged in');
      })
      .catch((err) => {
        this.toastr.error(err);
      });
  }
  signupWithGoogle() {
    this.authService
      .signinWithGoogle()
      .then(() => {
        this.router.navigate(['/products']);
        this.toastr.success('You are now logged in');
      })
      .catch((err) => {
        this.toastr.error(err);
      });
  }
}
