import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css'],
})
export class MenuItemsComponent {
  selectedCategory: string | null = null;

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
