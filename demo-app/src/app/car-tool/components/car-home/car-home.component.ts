import { Component } from '@angular/core';

import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { Car, NewCar } from 'src/app/car-tool/models/cars';
import {
  CarToolState,
  EditCar,
  CancelCar,
  AppendCar,
  ReplaceCar,
  RemoveCar,
  ArchiveCar,
} from '../../car-tool.state';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css'],
})
export class CarHomeComponent {
  @Select(CarToolState.editCarId) editCarId$!: Observable<number>;
  @Select(CarToolState.cars) cars$!: Observable<Car[]>;

  headerText = 'Car Tool';

  constructor(private store: Store) {}

  doEditCar(carId: number) {
    this.store.dispatch(new EditCar(carId));
  }

  doCancelCar() {
    this.store.dispatch(new CancelCar());
  }

  doAppendCar(newCar: NewCar) {
    this.store.dispatch(new AppendCar(newCar));
  }

  doReplaceCar(car: Car) {
    this.store.dispatch(new ReplaceCar(car));
  }

  doRemoveCar(carId: number) {
    this.store.dispatch(new RemoveCar(carId));
  }

  doArchiveCar(carId: number) {
    this.store.dispatch(new ArchiveCar(carId));
  }
}
