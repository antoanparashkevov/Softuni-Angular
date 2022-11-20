import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-title-manager',
  templateUrl: './title-manager.component.html',
  styleUrls: ['./title-manager.component.css']
})
export class TitleManagerComponent {
  titleName: string = 'Initial Title';
  @Output() newTitle = new EventEmitter<{ name: string }>()

  takeTitle() {
    this.newTitle.emit({
      name: this.titleName
    })
  }
}
