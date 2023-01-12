import { Component } from '@angular/core';
import { CarToolStoreService } from '../../services/car-tool-store.service';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css'],
})
export class CarHomeComponent {
  headerText = 'Car Tool';

  constructor(public carToolStoreSvc: CarToolStoreService) {}
}
