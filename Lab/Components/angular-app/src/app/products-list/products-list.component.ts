import { Component, OnInit } from '@angular/core';
import {EventType} from "@angular/router";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  title: string = 'Welcome to product-list component'

  changeTitle: boolean | undefined = true

  constructor() {
    if(this.changeTitle) {
      this.title = 'Welcome again, guest :)'
    }

  }

  clickChangeTitle(ev: MouseEvent) {
    console.log(ev)
  }

}
