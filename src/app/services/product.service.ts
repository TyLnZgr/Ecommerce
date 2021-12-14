import { Product } from './../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  SERVER_URL = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(this.SERVER_URL);
  }
}
