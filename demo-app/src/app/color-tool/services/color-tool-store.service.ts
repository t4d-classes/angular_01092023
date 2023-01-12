import { Injectable } from '@angular/core';
import { NewColor } from '../models/colors';
import { ColorsService } from './colors.service';

@Injectable({
  providedIn: 'root',
})
export class ColorToolStoreService {
  constructor(private colorsSvc: ColorsService) {}

  all() {
    return this.colorsSvc.all();
  }

  append(newColor: NewColor) {
    this.colorsSvc.append(newColor);
  }

  remove(colorId: number) {
    this.colorsSvc.remove(colorId);
  }
}
