import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

import { Car } from '../../models/cars';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarTableComponent {
  @Input()
  cars: Car[] | null = [];

  @Input()
  editCarId: number | null = -1;

  @Output() editCar = new EventEmitter<number>();
  @Output() deleteCar = new EventEmitter<number>();
  @Output() archiveCar = new EventEmitter<number>();
  @Output() saveCar = new EventEmitter<Car>();
  @Output() cancelCar = new EventEmitter<void>();
}
