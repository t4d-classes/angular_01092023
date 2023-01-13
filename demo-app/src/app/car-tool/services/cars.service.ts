import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Car, NewCar } from 'src/app/car-tool/models/cars';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor(private httpClient: HttpClient) {}

  public all() {
    return this.httpClient.get<Car[]>('http://localhost:3060/cars');
  }

  public append(newCar: NewCar) {
    return this.httpClient.post<Car>('http://localhost:3060/cars', newCar);
  }

  public replace(car: Car) {
    return this.httpClient.put<void>(
      `http://localhost:3060/cars/${encodeURIComponent(car.id)}`,
      car
    );
  }

  public remove(carId: number) {
    return this.httpClient.delete<void>(
      `http://localhost:3060/cars/${encodeURIComponent(carId)}`
    );
  }

  public archive(carId: number) {
    return this.httpClient.patch<void>(
      `http://localhost:3060/cars/${encodeURIComponent(carId)}`,
      { archived: true }
    );
  }
}
