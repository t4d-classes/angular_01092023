import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs';

import { Car, NewCar } from 'src/app/car-tool/models/cars';
import { CarsService } from './services/cars.service';

export class RefreshCars {
  static readonly type = '[Cars] Refresh Cars';
  constructor() {}
}

export class AppendCar {
  static readonly type = '[Cars] Append Car';
  constructor(public car: NewCar) {}
}

export class ReplaceCar {
  static readonly type = '[Cars] Replace Car';
  constructor(public car: Car) {}
}

export class RemoveCar {
  static readonly type = '[Cars] Remove Car';
  constructor(public carId: number) {}
}

export class ArchiveCar {
  static readonly type = '[Cars] Archive Car';
  constructor(public carId: number) {}
}

export class EditCar {
  static readonly type = '[Cars] Edit Car';
  constructor(public carId: number) {}
}

export class CancelCar {
  static readonly type = '[Cars] Cancel Car';
  constructor() {}
}

export type CarToolStateModel = { editCarId: number; cars: Car[] };

@State<CarToolStateModel>({
  name: 'cars',
  defaults: {
    editCarId: -1,
    cars: [],
  },
})
@Injectable()
export class CarToolState {
  @Selector()
  static editCarId(state: CarToolStateModel) {
    return state.editCarId;
  }

  @Selector()
  static cars(state: CarToolStateModel) {
    return state.cars;
  }

  constructor(public carsSvc: CarsService) {}

  @Action(RefreshCars)
  refreshCars(ctx: StateContext<CarToolStateModel>) {
    return this.carsSvc.all().pipe(
      tap((cars) => {
        ctx.patchState({
          cars,
          editCarId: -1,
        });
      })
    );
  }

  @Action(AppendCar)
  appendCar(ctx: StateContext<CarToolStateModel>, action: AppendCar) {
    return this.carsSvc
      .append(action.car)
      .pipe(tap(() => ctx.dispatch(new RefreshCars())));
  }

  @Action(ReplaceCar)
  replaceCar(ctx: StateContext<CarToolStateModel>, action: ReplaceCar) {
    return this.carsSvc
      .replace(action.car)
      .pipe(tap(() => ctx.dispatch(new RefreshCars())));
  }

  @Action(RemoveCar)
  removeCar(ctx: StateContext<CarToolStateModel>, action: RemoveCar) {
    return this.carsSvc
      .remove(action.carId)
      .pipe(tap(() => ctx.dispatch(new RefreshCars())));
  }

  @Action(EditCar)
  editCar(ctx: StateContext<CarToolStateModel>, action: EditCar) {
    ctx.patchState({
      editCarId: action.carId,
    });
  }

  @Action(CancelCar)
  cancelCar(ctx: StateContext<CarToolStateModel>) {
    ctx.patchState({
      editCarId: -1,
    });
  }

  @Action(ArchiveCar)
  archiveCar(ctx: StateContext<CarToolStateModel>, action: ArchiveCar) {
    return this.carsSvc
      .archive(action.carId)
      .pipe(tap(() => ctx.dispatch(new RefreshCars())));
  }
}
