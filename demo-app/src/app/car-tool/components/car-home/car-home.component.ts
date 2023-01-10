import { Component, OnInit } from '@angular/core';

import { Car } from '../../models/cars';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  headerText = "Car Tool";

  cars: Car[] = [
    { id: 1, make: 'Tesla', model: 'S', year: 2020, color: 'red', price: 120000 },
    { id: 2, make: 'Ford', model: 'T', year: 1922, color: 'black', price: 800 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
