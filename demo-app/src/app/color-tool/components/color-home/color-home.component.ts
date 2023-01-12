import { Component, OnInit } from '@angular/core';

import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { Color, NewColor } from 'src/app/color-tool/models/colors';
import { ColorsState, AppendColor, RemoveColor } from '../../colors.state';

@Component({
  selector: '.app-color-home', // any valid css
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css'],
})
export class ColorHomeComponent implements OnInit {
  @Select(ColorsState.colors) colors$!: Observable<Color[]>;

  headerText: string = 'Color Tool';

  colors: Color[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {}

  doAddColor(color: NewColor) {
    this.store.dispatch(new AppendColor(color));
  }

  doDeleteColor(colorId: number) {
    this.store.dispatch(new RemoveColor(colorId));
  }
}
