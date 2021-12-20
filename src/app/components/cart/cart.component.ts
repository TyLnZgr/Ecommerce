import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  user: any;
  public products: any = [];
  public grandTotal: number = 0;
  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
    this.authService.getAuth().subscribe((user) => {
      this.user = user;
    });
  }
  removeItem(product) {
    this.cartService.removeItem(product);
  }
  emptyCart() {
    this.cartService.removeAllItem();
  }
  removeAll() {
    this.cartService.removeAllItem();
  }

  addItem(product) {
    this.cartService.addToCart(product);
  }
}
