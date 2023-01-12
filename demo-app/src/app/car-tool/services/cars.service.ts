import { Injectable } from '@angular/core';

import { Car, NewCar } from 'src/app/car-tool/models/cars';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private cars: Car[] = [
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

  all() {
    return [...this.cars];
  }

  append(newCar: NewCar) {
    this.cars = [
      ...this.cars,
      {
        id: Math.max(...this.cars.map((c) => c.id), 0) + 1,
        ...newCar,
      },
    ];
  }

  remove(carId: number) {
    const carIndex = this.cars.findIndex((c) => c.id === carId);
    const newCars = [...this.cars];
    newCars.splice(carIndex, 1);
    this.cars = newCars;
  }

  replace(car: Car) {
    const carIndex = this.cars.findIndex((c) => c.id === car.id);
    const newCars = [...this.cars];
    newCars[carIndex] = car;
    this.cars = newCars;
  }

  archive(carId: number) {
    const carIndex = this.cars.findIndex((c) => c.id === carId);
    const newCars = [...this.cars];
    const newCar = { ...newCars[carIndex] };
    newCar.archived = true;
    newCars[carIndex] = newCar;
    this.cars = newCars;
  }
}
