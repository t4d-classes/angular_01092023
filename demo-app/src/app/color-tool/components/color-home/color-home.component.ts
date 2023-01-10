import { Component } from '@angular/core';

// import { Color } from '../../models/colors';
import { Color, NewColor } from 'src/app/color-tool/models/colors';

@Component({
  selector: '.app-color-home', // any valid css
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css'],
})
export class ColorHomeComponent {
  headerText: string = 'Color Tool';

  colors: Color[] = [
    { id: 1, name: 'red', hexcode: 'ff0000' },
    { id: 2, name: 'green', hexcode: '00ff00' },
    { id: 3, name: 'blue', hexcode: '0000ff' },
  ];

  addColor(newColor: NewColor) {

    this.colors = [
      ...this.colors,
      {
        id: Math.max(...this.colors.map((c) => c.id), 0) + 1,
        ...newColor,
      },
    ];
  }
}
