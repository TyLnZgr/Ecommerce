import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productID: number;
  productData;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.productID = data['id'];
    });
    this.productService.getProductById(this.productID).subscribe((prod) => {
      this.productData = prod;
    });
  }
  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.toastr.success('The product has been successfully added', '', {
      positionClass: 'toast-bottom-right',
    });
  }
}
