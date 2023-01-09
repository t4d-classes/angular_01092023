import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorHomeComponent } from './components/color-home/color-home.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ColorHomeComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [ ColorHomeComponent ]
})
export class ColorToolModule { }
