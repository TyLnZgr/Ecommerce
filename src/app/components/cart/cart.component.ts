import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public products: any = [];
  public grandTotal: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
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
