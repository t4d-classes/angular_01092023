import { Injectable } from '@angular/core';
import { CarsService } from './cars.service';

import { Car, NewCar } from 'src/app/car-tool/models/cars';

@Injectable({
  providedIn: 'root',
})
export class CarToolStoreService {
  private _editCarId = -1;

  constructor(private carsSvc: CarsService) {}

  get editCarId() {
    return this._editCarId;
  }

  get cars() {
    return this.carsSvc.all();
  }

  editCar(carId: number) {
    this._editCarId = carId;
  }

  cancelCar() {
    this._editCarId = -1;
  }

  addCar(newCar: NewCar) {
    this.carsSvc.append(newCar);
    this._editCarId = -1;
  }

  saveCar(car: Car) {
    this.carsSvc.replace(car);
    this._editCarId = -1;
  }

  deleteCar(carId: number) {
    this.carsSvc.remove(carId);
    this._editCarId = -1;
  }

  archiveCar(carId: number) {
    this.carsSvc.archive(carId);
    this._editCarId = -1;
  }
}
