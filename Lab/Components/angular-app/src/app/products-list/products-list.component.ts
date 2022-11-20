import { Component, OnInit } from '@angular/core';
import {EventType} from "@angular/router";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  title: string = 'Welcome to product-list component'
  inputValue: string | undefined = 'typeSomething'
  changeTitle: boolean | undefined = true
  showTitle = false;
  elements = [
    {
      name: 'John',
      age: 18
    },
    {
      name: 'Melissa',
      age: 20
    },
    {
      name: 'Mila',
      age: 21
    }
  ]
  constructor() {
    if(this.changeTitle) {
      this.title = 'Welcome again, guest :)'
    }

  }

  clickChangeTitle(ev: MouseEvent) {
    console.log(ev)
    console.log(this.inputValue)
    this.title = 'Title was changed successfully :)'
  }

  catchInsertedText(ev: any) {
    console.log('DOM event Object', ev)
    this.inputValue = ev.target.value
  }

  takeValue() {
    console.log('Inserted Value >>> ', this.inputValue)
  }

}
