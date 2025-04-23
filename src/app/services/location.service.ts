import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor() {}

  // Function to get the user's current location
  getLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            resolve({ latitude, longitude });
          },
          (error) => {
            reject('Error retrieving location');
          },
          {
            enableHighAccuracy: true,  // Request higher accuracy
            timeout: 5000,              // Timeout after 5 seconds if not accurate enough
            maximumAge: 0               // No caching of the location
          }
        );
      } else {
        reject('Geolocation not supported');
      }
    });
  }
  
  // Function to reverse geocode the latitude and longitude to address using Nominatim
  getAddressFromCoordinates(latitude: number, longitude: number): Promise<string> {
    return new Promise((resolve, reject) => {
      const geocodeUrl = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

      fetch(geocodeUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.display_name) {
            resolve(data.display_name);  // Return the human-readable address
          } else {
            reject('Address not found');
          }
        })
        .catch((error) => {
          reject('Error fetching address');
        });
    });
  }
}
