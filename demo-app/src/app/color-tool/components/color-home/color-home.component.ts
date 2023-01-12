import { Component, OnInit } from '@angular/core';

import { Color, NewColor } from 'src/app/color-tool/models/colors';
import { ColorsService } from '../../services/colors.service';

@Component({
  selector: '.app-color-home', // any valid css
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css'],
})
export class ColorHomeComponent implements OnInit {
  headerText: string = 'Color Tool';

  colors: Color[] = [];

  constructor(private colorsSvc: ColorsService) {}

  ngOnInit(): void {
    this.doRefreshColors();
  }

  doRefreshColors() {
    this.colors = this.colorsSvc.all();
  }

  doAddColor(color: NewColor) {
    this.colorsSvc.append(color);
    this.doRefreshColors();
  }

  doDeleteColor(colorId: number) {
    this.colorsSvc.remove(colorId);
    this.doRefreshColors();
  }
}
