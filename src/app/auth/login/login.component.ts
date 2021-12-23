import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  login() {
    this.authService
      .login(this.email, this.password)
      .then(() => {
        this.toastr.success('Logged in was succesfull', '', {
          positionClass: 'toast-bottom-right',
        });
        this.router.navigate(['/products']);
      })
      .catch((err) => {
        this.toastr.error(err);
      });
  }
  rememberMe() {
    this.authService.setRememberMe();
  }
}
