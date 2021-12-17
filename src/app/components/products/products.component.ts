import { CartService } from './../../services/cart.service';
import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  page: number = 1;
  products: Product[] = [];
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((prods: Product[]) => {
      this.products = prods;

      this.products.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.toastr.success('The product has been successfully added');
  }
}
