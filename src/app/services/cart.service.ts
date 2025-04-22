import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  getItems() {
    return this.cartItems;
  }

  addItem(item: any) {
    // Simply add the item as a new entry without checking for the existing item
    this.cartItems.push({ ...item, qty: 1 }); // Add new item with qty = 1
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * (item.qty || 1), 0);
  }

  removeItem(item: any) {
    const index = this.cartItems.findIndex(cartItem => cartItem.name === item.name);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }

  increaseQuantity(item: any) {
    const cartItem = this.cartItems.find(cartItem => cartItem.name === item.name);
    if (cartItem) {
      cartItem.qty += 1;
      cartItem.price += item.price;  // Adjust price based on quantity
    }
  }

  decreaseQuantity(item: any) {
    const cartItem = this.cartItems.find(cartItem => cartItem.name === item.name);
    if (cartItem && cartItem.qty > 1) {
      cartItem.qty -= 1;
      cartItem.price -= item.price;  // Adjust price based on quantity
    }
  }
}
