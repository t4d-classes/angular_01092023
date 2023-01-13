import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxsModule } from '@ngxs/store';

import { SharedModule } from '../shared/shared.module';

import { CarHomeComponent } from './components/car-home/car-home.component';
import { CarTableComponent } from './components/car-table/car-table.component';
import { CarViewRowComponent } from './components/car-view-row/car-view-row.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarEditRowComponent } from './components/car-edit-row/car-edit-row.component';
import { CarToolState } from './car-tool.state';

@NgModule({
  declarations: [
    CarHomeComponent,
    CarTableComponent,
    CarViewRowComponent,
    CarFormComponent,
    CarEditRowComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxsModule.forFeature([CarToolState]),
    SharedModule,
  ],
  exports: [CarHomeComponent],
})
export class CarToolModule {}
