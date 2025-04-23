import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { LocationService } from '../services/location.service'; // Import the location service
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @Input() visible: boolean = false;
  selectedPaymentMethod: string = '';
  subTotal: number = 0;
  taxAmount: number = 0;
  grandTotal: number = 0;
  showConfirmation: boolean = false;
  deliveryAddress: string = ''; 
  constructor(private cartService: CartService,
    private locationService: LocationService
  ) {}

  ngOnInit(): void {
    this.updatePriceDetails();
    this.getDeliveryAddress();
  }

  selectPayment(method: string) {
    this.selectedPaymentMethod = method;
  }

  placeOrder() {
    this.showConfirmation = true;
    setTimeout(() => {
      this.showConfirmation = false;
    }, 3000);
  }


  updatePriceDetails() {
    this.subTotal = this.cartService.getTotalPrice();
    this.taxAmount = parseFloat((this.subTotal * 0.12).toFixed(2)); // Example: 12% tax
    this.grandTotal = parseFloat((this.subTotal + this.taxAmount).toFixed(2));
  }
  getDeliveryAddress() {
    this.locationService.getLocation()
      .then(location => {
        // Once we have the coordinates, fetch the address
        return this.locationService.getAddressFromCoordinates(location.latitude, location.longitude);
      })
      .then(address => {
        this.deliveryAddress = address; // Set the dynamic address
      })
      .catch(error => {
        console.error(error);
        this.deliveryAddress = 'Default Address'; // Fallback address if there's an error
      });
  }
}