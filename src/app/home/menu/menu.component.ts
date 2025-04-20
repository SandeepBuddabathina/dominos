import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: {
    title: string;
    image: string;
    description: string;
    isVeg: boolean;
  }[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
        title: 'VEG PIZZA',
        image: 'assets/menu/veg-pizza.jpg',
        description: `A delight for veggie lovers! Choose from our wide range of delicious vegetarian pizzas, it's softer and tastier`,
        isVeg: true
      },
      {
        title: 'NON-VEG PIZZA',
        image: 'assets/menu/nonveg-pizza.avif',
        description: `Choose your favourite non-veg pizzas from the Domino's Pizza menu. Get fresh non-veg pizza with your choice of crusts & toppings`,
        isVeg: false
      },
      {
        title: 'PIZZA MANIA',
        image: 'assets/menu/pizza-mania.png',
        description: `Indulge into mouth-watering taste of Pizza mania range, perfect answer to all your food cravings`,
        isVeg: true
      },
    ];
  }
}
