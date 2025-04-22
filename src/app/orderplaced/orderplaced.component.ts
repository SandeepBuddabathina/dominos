import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-orderplaced',
  templateUrl: './orderplaced.component.html',
  styleUrls: ['./orderplaced.component.css']
})
export class OrderplacedComponent {
  @Input() visible: boolean = false;
}