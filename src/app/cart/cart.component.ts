
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { LocationService } from '../services/location.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;
  userLocation: string = '';

  addons = [
    { name: 'Garlic Breadsticks + Cheesy Dip', price: 137.57, img: 'assets/cart/garlicbread.jfif' },
    { name: 'Garlic Breadsticks + Beverage', price: 149, img: 'assets/cart/breaddrink.jfif' },
    { name: 'Garlic Breadsticks', price: 109, img: 'assets/cart/garlicstick.jfif' },
    { name: 'Choco Lava Cake', price: 109, img: 'assets/cart/lavacake.jfif' },
    { name: 'Butterscotch Mousse Cake', price: 109, img: 'assets/cart/mousse.jfif' },
    { name: 'Cheesy Dip', price: 30, img: 'assets/cart/cheesedip.jfif' },
  ];


  constructor(private cartService: CartService,
    private locationService: LocationService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.totalPrice = this.cartService.getTotalPrice();
    this.getUserLocation();
  }

  goToPayment(): void {
    const grandTotal = this.totalPrice + 27.95;
    this.router.navigate(['/payment'], {
      state: {
        cartItems: this.cartItems,
        totalPrice: this.totalPrice,
        taxes: 27.95,
        grandTotal: grandTotal
      }
    });
  }
  getUserLocation(): void {
    this.locationService.getLocation().then((coords: any) => {
      this.locationService.getAddressFromCoordinates(coords.latitude, coords.longitude)
        .then((address: string) => {
          this.userLocation = address;
        })
        .catch(error => console.error('Error fetching address:', error));
    }).catch(error => console.error('Error retrieving location:', error));
  }

  updateCart(): void {
    this.cartItems = this.cartService.getItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  removeItem(item: any): void {
    this.cartService.removeItem(item);
    this.updateCart();
  }

  increaseQuantity(item: any): void {
    this.cartService.increaseQuantity(item);
    this.updateCart();
  }

  decreaseQuantity(item: any): void {
    this.cartService.decreaseQuantity(item);
    this.updateCart();
  }

  addToCart(item: any) {
    const existing = this.cartItems.find(ci => ci.name === item.name);
    if (existing) {
      this.increaseQuantity(existing);
    } else {
      this.cartItems.push({ ...item, qty: 1 });
    }
    this.updateCart();
  }
  
}

