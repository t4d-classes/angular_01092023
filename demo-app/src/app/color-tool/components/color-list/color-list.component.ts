import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Color } from '../../models/colors';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css'],
})
export class ColorListComponent {
  @Input()
  public colors: Color[] = [];

  @Output()
  public deleteColor = new EventEmitter<number>();

  public doDeleteColor(colorId: number) {
    this.deleteColor.emit(colorId);
  }
}
