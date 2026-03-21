import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css'],
})
export class MenuItemsComponent implements OnInit {
  selectedCategory: string | null = null;

  constructor(private location: Location) {}

  ngOnInit(): void {}

  goBack() {
    this.location.back();
  }

  menuItems = [
    {
      title: 'Veg Pizza',
      image: 'assets/menu/veg-pizza.jpg',
      description: 'Delicious vegetarian pizzas.',
      category: 'veg',
    },
    {
      title: 'Non-Veg Pizza',
      image: 'assets/menu/nonveg-pizza.avif',
      description: 'Tasty non-veg selections.',
      category: 'nonveg',
    },
    {
      title: 'Pizza Mania',

      image: 'assets/menu/pizza-mania.png',
      description: 'Mini pizzas, mega flavor!',
      category: 'mania',
    },
  ];

  viewCategory(category: string) {
    this.selectedCategory = category;
  }
}
