import { AuthService } from './../../services/auth.service';
import { CartService } from './../../services/cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: any;
  public totalItem: number = 0;
  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.totalItem = res.length;
    });
    this.authService.getAuth().subscribe((user) => {
      this.user = user;
    });
  }

  logout() {
    this.authService.logout();
    this.toastr.info('You are now logged out', '', {
      positionClass: 'toast-bottom-right',
    });
    this.router.navigate(['/products']);
  }
}
