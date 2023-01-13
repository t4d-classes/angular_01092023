import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxsModule } from '@ngxs/store';

import { SharedModule } from '../shared/shared.module';
import { ColorToolRoutingModule } from './color-tool.routing';

import { ColorHomeComponent } from './components/color-home/color-home.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorFormComponent } from './components/color-form/color-form.component';
import { ColorsState } from './colors.state';

@NgModule({
  declarations: [ColorHomeComponent, ColorListComponent, ColorFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxsModule.forFeature([ColorsState]),
    ColorToolRoutingModule,
    SharedModule,
  ],
  exports: [ColorHomeComponent],
})
export class ColorToolModule {}
