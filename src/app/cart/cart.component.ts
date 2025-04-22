import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  addons = [
    { name: 'Garlic Breadsticks + Cheesy Dip', price: 137.57, img: 'assets/cart/garlicbread.jfif' },
    { name: 'Garlic Breadsticks + Beverage', price: 149, img: 'assets/cart/breaddrink.jfif' },
    { name: 'Garlic Breadsticks', price: 109, img: 'assets/cart/garlicstick.jfif' },
    { name: 'Choco Lava Cake', price: 109, img: 'assets/cart/lavacake.jfif' },
    { name: 'Butterscotch Mousse Cake', price: 109, img: 'assets/cart/mousse.jfif' },
    { name: 'Cheesy Dip', price: 30, img: 'assets/cart/cheesedip.jfif' },
  ];
   
}
