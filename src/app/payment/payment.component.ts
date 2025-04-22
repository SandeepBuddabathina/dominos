import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  selectedPayment = '';
  showConfirmation = false;

  selectPayment(method: string) {
    this.selectedPayment = method;
  }

  placeOrder() {
    this.showConfirmation = true;
    setTimeout(() => {
      this.showConfirmation = false;
    }, 3000);
  }
}
