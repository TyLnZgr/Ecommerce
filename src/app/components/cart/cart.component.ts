import { Router } from '@angular/router';
import { Product } from './../../models/product.model';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  private grandTotal: number;
  total: number = 0;
  user: any;
  products: Product[] = [];
  private QtyUpdated(qty: number, index: number) {
    this.products[index].qty = qty;
    this.cartService.setCartData(this.products);
    this.getTotal(this.products);
  }
  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.cartItems.subscribe((data) => {
      this.products = data;
      if (this.products) this.getTotal(this.products);
    });
    this.authService.getAuth().subscribe((user) => {
      this.user = user;
    });
    this.grandTotal = this.total;
  }
  removeItem(index: number) {
    if (confirm('Are you sure ? ')) {
      this.products.splice(index, 1);
      this.cartService.setCartData(this.products);
      this.getTotal(this.products);
    }
  }
  validateInput(event: any, index: number) {
    const qty = +event.target.value;
    if (qty < 1) {
      event.target.value = this.products[index].qty;
      return;
    }
    this.QtyUpdated(qty, index);
  }
  getTotal(data: any) {
    let subs = 0;
    for (const product of data) subs += product.price * product.qty;
    this.total = subs;
  }
  removeAll() {
    this.cartService.removeAllItem();
  }
  gotoCheckout() {
    this.router.navigate(['/checkout'], { state: { data: this.grandTotal } });
  }
}
