import { Component, OnInit } from '@angular/core';

import { Car, NewCar } from '../../models/cars';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css'],
})
export class CarHomeComponent implements OnInit {
  headerText = 'Car Tool';

  editCarId = -1;

  cars: Car[] = [
    {
      id: 1,
      make: 'Tesla',
      model: 'S',
      year: 2020,
      color: 'red',
      price: 120000,
      archived: false,
    },
    {
      id: 2,
      make: 'Ford',
      model: 'T',
      year: 1922,
      color: 'black',
      price: 800,
      archived: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  doEditCar(carId: number) {
    this.editCarId = carId;
  }

  doCancelCar() {
    this.editCarId = -1;
  }

  doAddCar(newCar: NewCar) {
    this.cars = [
      ...this.cars,
      {
        id: Math.max(...this.cars.map((c) => c.id), 0) + 1,
        ...newCar,
      },
    ];
    this.editCarId = -1;
  }

  doDeleteCar(carId: number) {
    const carIndex = this.cars.findIndex((c) => c.id === carId);
    const newCars = [...this.cars];
    newCars.splice(carIndex, 1);
    this.cars = newCars;
    this.editCarId = -1;
  }

  doSaveCar(car: Car) {
    const carIndex = this.cars.findIndex((c) => c.id === car.id);
    const newCars = [...this.cars];
    newCars[carIndex] = car;
    this.cars = newCars;
    this.editCarId = -1;
  }

  doArchiveCar(carId: number) {
    const carIndex = this.cars.findIndex((c) => c.id === carId);
    const newCars = [...this.cars];

    const newCar = { ...newCars[carIndex] };
    newCar.archived = true;

    newCars[carIndex] = newCar;

    this.cars = newCars;
    this.editCarId = -1;
  }
}
