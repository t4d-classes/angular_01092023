import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxsModule } from '@ngxs/store';

import { SharedModule } from '../shared/shared.module';

import { ColorHomeComponent } from './components/color-home/color-home.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorFormComponent } from './components/color-form/color-form.component';
import { ColorsService } from './services/colors.service';
import { ColorsState } from './colors.state';

@NgModule({
  declarations: [ColorHomeComponent, ColorListComponent, ColorFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    NgxsModule.forFeature([ ColorsState ]),
  ],
  exports: [ColorHomeComponent],
  providers: [ColorsService],
})
export class ColorToolModule {}
