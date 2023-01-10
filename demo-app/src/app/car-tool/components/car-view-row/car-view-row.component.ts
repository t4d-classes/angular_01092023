import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../../models/cars';

@Component({
  selector: '.car-view-row',
  templateUrl: './car-view-row.component.html',
  styleUrls: ['./car-view-row.component.css'],
})
export class CarViewRowComponent {
  @Input()
  car!: Car;

  @Output()
  deleteCar = new EventEmitter<number>();

  doDeleteCar(carId: number) {
    this.deleteCar.emit(carId);
  }
}
