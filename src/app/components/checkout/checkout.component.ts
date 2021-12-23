import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  grandTotal;
  constructor(private toastr: ToastrService) {}

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
