import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Color, NewColor } from 'src/app/color-tool/models/colors';

@Injectable({
  providedIn: 'root',
})
export class ColorsService {
  constructor(private httpClient: HttpClient) {}

  public all() {
    return this.httpClient.get<Color[]>('http://localhost:3060/colors');
  }

  public append(newColor: NewColor) {
    return this.httpClient.post<Color>(
      'http://localhost:3060/colors',
      newColor
    );
  }

  public remove(colorId: number) {
    return this.httpClient.delete<void>(
      `http://localhost:3060/colors/${encodeURIComponent(colorId)}`
    );
  }
}
