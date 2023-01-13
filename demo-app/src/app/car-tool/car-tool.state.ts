import { State, Action, StateContext, Selector } from '@ngxs/store';

import { Car, NewCar } from 'src/app/car-tool/models/cars';

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
    cars: [
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
    ],
  },
})
export class CarToolState {
  @Selector()
  static editCarId(state: CarToolStateModel) {
    return state.editCarId;
  }

  @Selector()
  static cars(state: CarToolStateModel) {
    return state.cars;
  }

  @Action(AppendCar)
  appendCar(ctx: StateContext<CarToolStateModel>, action: AppendCar) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      editCarId: -1,
      cars: [
        ...state.cars,
        {
          ...action.car,
          id: Math.max(...state.cars.map((c) => c.id), 0) + 1,
        },
      ],
    });
  }

  @Action(ReplaceCar)
  replaceCar(ctx: StateContext<CarToolStateModel>, action: ReplaceCar) {
    const state = ctx.getState();

    const carIndex = state.cars.findIndex((c) => c.id === action.car.id);
    const newCars = [...state.cars];
    newCars[carIndex] = action.car;

    ctx.setState({
      ...state,
      editCarId: -1,
      cars: newCars,
    });
  }

  @Action(RemoveCar)
  removeCar(ctx: StateContext<CarToolStateModel>, action: RemoveCar) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      editCarId: -1,
      cars: state.cars.filter((c) => c.id !== action.carId),
    });
  }

  @Action(EditCar)
  editCar(ctx: StateContext<CarToolStateModel>, action: EditCar) {
    // const state = ctx.getState();
    // ctx.setState({
    //   ...state,
    //   editCarId: action.carId,
    // });
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
    const state = ctx.getState();

    const carIndex = state.cars.findIndex((c) => c.id === action.carId);
    const newCars = [...state.cars];
    newCars[carIndex] = {
      ...newCars[carIndex],
      archived: true,
    };

    ctx.setState({
      ...state,
      editCarId: -1,
      cars: newCars,
    });
  }
}
