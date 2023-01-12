import { Injectable } from '@angular/core';

import { Color, NewColor } from 'src/app/color-tool/models/colors';

@Injectable({
  providedIn: 'root',
})
export class ColorsService {
  private colors: Color[] = [
    { id: 1, name: 'red', hexcode: 'ff0000' },
    { id: 2, name: 'green', hexcode: '00ff00' },
    { id: 3, name: 'blue', hexcode: '0000ff' },
  ];

  constructor() {}

  public all(): Color[] {
    return [...this.colors];
  }

  public append(newColor: NewColor) {
    this.colors = [
      ...this.colors,
      {
        id: Math.max(...this.colors.map((c) => c.id), 0) + 1,
        ...newColor,
      },
    ];
  }

  public remove(colorId: number) {
    this.colors = this.colors.filter((c) => c.id !== colorId);
  }
}
