import { Component } from '@angular/core';

@Component({
  selector: 'app-delivery-location',
  templateUrl: './delivery-location.component.html',
  styleUrls: ['./delivery-location.component.css']
})
export class DeliveryLocationComponent {
  recentlySearched: string[] = [];

  detectLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const location = `Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}`;
          this.recentlySearched.unshift(location);
        },
        () => {
          alert('Location access denied or not available');
        }
      );
    } else {
      alert('Geolocation not supported');
    }
  }

  clearHistory() {
    this.recentlySearched = [];
  }
}
