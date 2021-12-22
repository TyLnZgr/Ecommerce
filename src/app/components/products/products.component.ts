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
  filterText: string = '';
  page: number = 1;
  products: Product[] = [];
  product: Product;
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }
  addToCart(product: Product) {
    this.cartService.addItemToCart(product);
    this.toastr.success('The product has been successfully added', '', {
      positionClass: 'toast-bottom-right',
    });
  }
}
