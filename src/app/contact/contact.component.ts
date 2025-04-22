import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  restaurants = [
    { name: 'Restaurants in Chennai' }, { name: 'Restaurants in Hyderabad' }, { name: 'Restaurants in Bangalore' },
    { name: 'Restaurants in Kolkata' }, { name: 'Restaurants in Mumbai' }, { name: 'Restaurants in New Delhi' },
    { name: 'Restaurants in Ahmedabad' }, { name: 'Restaurants in Pune' }, { name: 'Restaurants in Goa' },
    { name: 'Restaurants in Jaipur' }, { name: 'Restaurants in Chandigarh' }, { name: 'Restaurants in Lucknow' },
    { name: 'Restaurants in Mysore' }, { name: 'Restaurants in Patna' }, { name: 'Restaurants in Guwahati' },
    { name: 'Restaurants in Meerut' }, { name: 'Restaurants in Solan' }, { name: 'Restaurants in Warangal' },
    { name: 'Restaurants in Gwalior' }, { name: 'Restaurants in Hooghly' }, { name: 'Restaurants in Pathankot' },
    { name: 'Restaurants in Itanagar' }, { name: 'Restaurants in Rewari' }, { name: 'Restaurants in Korba' },
    { name: 'Restaurants in Bhilwara' }
  ];
  
  menu = [
    { name: 'Veg Pizza' }, { name: 'Chicken Pizza' }, { name: 'Pasta' }, { name: 'Pizza Crust' },
    { name: 'Beverages' }, { name: 'Pizza Mania' }, { name: 'Burger Pizza' }, { name: 'Farm House Pizza' },
    { name: 'Veg Margherita Pizza' }, { name: 'Cheese Corn Pizza' }, { name: 'Double Cheese Margherita Pizza' },
    { name: 'Paneer Makhani Pizza' }, { name: 'Choco Lava Cake' }, { name: 'Roasted Chicken Wings' },
    { name: 'Peri Peri Garlic Bread' }, { name: 'Stuffed Garlic Bread' }, { name: 'Paneer Zingy Parcel' },
    { name: 'Fresh Pan Pizza' }, { name: 'New Hand Tossed Pizza' }, { name: 'Classic Hand Tossed Pizza' },
    { name: 'Golden Corn Pizza' }, { name: 'Extra Cheese Pizza' }, { name: 'Wednesday Offer - Pizza Buy 1 Get 1' }
  ];

}
