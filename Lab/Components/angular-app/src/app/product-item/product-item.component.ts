import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() obj!: { name: string, age: number};
  @Input() i!: number;
  @Input() customProperty!: string;

  constructor() {
  }

}
