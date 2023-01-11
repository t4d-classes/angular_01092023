import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';

import { Car } from '../../models/cars';

@Component({
  selector: '.car-edit-row',
  templateUrl: './car-edit-row.component.html',
  styleUrls: ['./car-edit-row.component.css'],
})
export class CarEditRowComponent implements OnInit {
  @Input()
  car!: Car;

  @Output()
  saveCar = new EventEmitter<Car>();

  @Output()
  cancelCar = new EventEmitter<void>();

  carForm = this.fb.group({
    make: '',
    model: '',
    year: 1900,
    color: '',
    price: 0,
  });

  constructor(private fb: NonNullableFormBuilder) {}

  ngOnInit() {
    this.carForm.patchValue({
      make: this.car.make,
      model: this.car.model,
      year: this.car.year,
      color: this.car.color,
      price: this.car.price,
    });
  }

  doSaveCar() {
    this.saveCar.emit({
      ...this.carForm.value,
      id: this.car.id,
    } as Car);
  }

  doCancelCar() {
    this.cancelCar.emit();
  }
}
