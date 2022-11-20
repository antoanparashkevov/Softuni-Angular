import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-title-manager',
  templateUrl: './title-manager.component.html',
  styleUrls: ['./title-manager.component.css']
})
export class TitleManagerComponent {
  titleName: string = 'Initial Title';
  serverStatus: string;
  @Output() newTitle = new EventEmitter<{ name: string }>()

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  takeTitle() {
    this.newTitle.emit({
      name: this.titleName
    })
  }
}
