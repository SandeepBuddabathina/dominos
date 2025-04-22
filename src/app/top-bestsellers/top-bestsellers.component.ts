import { Component } from '@angular/core';
interface Bestseller {
  title: string;
  description: string;
  price: number;
  sizeLabel: string;
  crustLabel: string;
  imageUrl: string;
  isVeg: boolean;
  top10: boolean;
}
@Component({
  selector: 'app-top-bestsellers',
  templateUrl: './top-bestsellers.component.html',
  styleUrls: ['./top-bestsellers.component.css'] // optional, if you want custom styles
})
export class TopBestsellersComponent {
  bestsellers: Bestseller[] = [
    {
      title: 'Peppy Paneer',
      description: 'Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika.',
      price: 259,
      sizeLabel: 'Regular',
      crustLabel: 'New Hand Tossed',
      imageUrl: 'assets/top/peppy-paneer.webp',
      isVeg: true,
      top10: true
    },
    {
      title: 'Margherita',
      description: 'Classic delight with 100% real mozzarella cheese.',
      price: 109,
      sizeLabel: 'Regular',
      crustLabel: 'New Hand Tossed',
      imageUrl: 'assets/top/margherita.webp',
      isVeg: true,
      top10: true
    },
    {
      title: 'Farmhouse',
      description: 'Delightful combination of onion, capsicum, tomato & grilled mushroom.',
      price: 259,
      sizeLabel: 'Regular',
      crustLabel: 'New Hand Tossed',
      imageUrl: 'assets/top/farmhouse.webp',
      isVeg: true,
      top10: true
    },

    {
      title: 'Veggie Paradise',
      description: 'The awesome foursome! Golden corn, black olives, capsicum, red paprika.',
      price: 259,
      sizeLabel: 'Regular',
      crustLabel: 'New Hand Tossed',
      imageUrl: 'assets/top/veggie-paradise.webp',
      isVeg: true,
      top10: true
    },
    // …add up to 10 items
  ];
}