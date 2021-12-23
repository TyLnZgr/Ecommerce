import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  placeHolder = [];
  cartItems = new BehaviorSubject([]);
  constructor() {
    const ls = this.getCartData();
    if (ls) this.cartItems.next(ls);
  }

  addItemToCart(product: Product) {
    const ls = this.getCartData();
    let existItem: Product;
    if (ls) {
      existItem = ls.find((item) => {
        return item.id === product.id;
      });
    }

    if (existItem) {
      existItem.qty++;
      this.setCartData(ls);
    } else {
      if (ls) {
        const newData = [...ls, product];
        this.setCartData(newData);
      }
      this.placeHolder.push(product);
      this.setCartData(this.placeHolder);
    }
  }
  setCartData(data: any) {
    localStorage.setItem('cart', JSON.stringify(data));
    this.cartItems.next(this.getCartData());
  }
  getCartData() {
    return JSON.parse(localStorage.getItem('cart'));
  }
  removeAllItem() {
    if (confirm('Are you sure ? ')) {
      this.placeHolder = [];
      this.cartItems.next(this.placeHolder);
    }
    this.setCartData(this.placeHolder);
  }
  removeCart() {
    this.placeHolder = [];
    this.setCartData(this.placeHolder);
  }
}
