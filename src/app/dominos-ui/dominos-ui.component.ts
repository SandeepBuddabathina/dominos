import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dominos-ui',
  templateUrl: './dominos-ui.component.html',
  styleUrls: ['./dominos-ui.component.css']
})
export class DominosUiComponent {
  selectedAddress: string | null = null;
  showLocationModal = false;
  manualAddress: string = '';
  selectedMode: string = 'Delivery';

  constructor(private router: Router) {} // ✅ Added constructor with Router

  openLocationModal() {
    this.showLocationModal = true;
  }

  selectMode(mode: string) {
    this.selectedMode = mode;

    // ✅ Navigate to select-location component if Delivery is selected
    if (mode === 'Delivery' || mode === 'Takeaway' || mode === 'Dine-in') {
      this.router.navigate(['/select-location']);
    }
  }

  closeModal() {
    this.showLocationModal = false;
  }

  toggleLocationModal() {
    this.showLocationModal = !this.showLocationModal;
  }

  detectLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          this.selectedAddress = `Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}`;
          this.showLocationModal = false;
        },
        (error) => {
          alert('Location access denied or not available');
        }
      );
    } else {
      alert('Geolocation not supported by your browser');
    }
  }

  confirmLocation() {
    if (this.manualAddress.trim() !== '') {
      this.selectedAddress = this.manualAddress.trim();
      this.showLocationModal = false;
    } else {
      alert('Please enter an address or detect location');
    }
  }

  cravings = [
    { title: 'Big Big Pizza', img: 'assets/dominos/bigbig.png' },
    { title: 'Cheese Burst Pizza', img: 'assets/dominos/cheeseburst.jpg' },
    { title: 'Veg Pizza', img: 'assets/dominos/vegpizza.png' },
    { title: 'Cheese Volcano', img: 'assets/dominos/volcano.jpg' },
    { title: 'Pizza Mania', img: 'assets/dominos/maniadeal.png' },
    { title: 'Value Combos', img: 'assets/dominos/combos.png' },
    { title: 'Garlic Breads & More', img: 'assets/dominos/garlicbread.jpg' },
    { title: 'Beverages', img: 'assets/dominos/coke.png' },
    { title: 'Spicy Pizza', img: 'assets/dominos/spicypizza.png' },
  ];

  whatsNew = [
    { img: 'assets/dominos/whatsnew1.jpg' },
    { img: 'assets/dominos/whatsnew2.JPG' },
    { img: 'assets/dominos/whatsnew3.jpg' },
    { img: 'assets/dominos/whatsnew4.jpg' },
    { img: 'assets/dominos/whatsnew5.jpg' },
  ];
}
