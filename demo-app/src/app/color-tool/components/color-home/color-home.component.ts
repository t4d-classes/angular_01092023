import { Component, OnInit } from '@angular/core';

import { Color, NewColor } from 'src/app/color-tool/models/colors';
import { ColorToolStoreService } from '../../services/color-tool-store.service';

@Component({
  selector: '.app-color-home', // any valid css
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css'],
})
export class ColorHomeComponent implements OnInit {
  headerText: string = 'Color Tool';

  colors: Color[] = [];

  constructor(private colorToolStoreSvc: ColorToolStoreService) {}

  ngOnInit(): void {
    this.doRefreshColors();
  }

  doRefreshColors() {
    this.colors = this.colorToolStoreSvc.all();
  }

  doAddColor(color: NewColor) {
    this.colorToolStoreSvc.append(color);
    this.doRefreshColors();
  }

  doDeleteColor(colorId: number) {
    this.colorToolStoreSvc.remove(colorId);
    this.doRefreshColors();
  }
}
