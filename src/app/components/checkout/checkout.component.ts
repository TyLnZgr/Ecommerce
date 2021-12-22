import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  grandTotal;
  constructor(
    private cartService: CartService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.grandTotal = history.state.data;
  }

  SuccessCheckout(form: NgForm) {
    this.toastr.success(
      `Toplam Ödeme: ${this.grandTotal}  başarıyla gerçekleşti `,
      '',
      {
        positionClass: 'toast-bottom-right',
      }
    );
    form.reset();
  }
}
