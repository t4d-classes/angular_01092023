import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs';

import { Color, NewColor } from 'src/app/color-tool/models/colors';
import { ColorsService } from './services/colors.service';

export class RefreshColors {
  static readonly type = '[Colors] Refresh Colors';
}

export class AppendColor {
  static readonly type = '[Colors] Append Color';
  constructor(public color: NewColor) {}
}

export class RemoveColor {
  static readonly type = '[Colors] Remove Color';
  constructor(public colorId: number) {}
}

export type ColorsStateModel = { colors: Color[] };

@Injectable()
@State<ColorsStateModel>({
  name: 'colors',
  defaults: {
    colors: [],
  },
})
export class ColorsState {
  @Selector()
  static colors(state: ColorsStateModel) {
    return state.colors;
  }

  constructor(private colorsSvc: ColorsService) {}

  @Action(RefreshColors)
  refreshColors(ctx: StateContext<ColorsStateModel>) {
    return this.colorsSvc.all().pipe(
      tap((colors) => {
        ctx.patchState({
          colors,
        });
      })
    );
  }

  @Action(AppendColor)
  appendColor(ctx: StateContext<ColorsStateModel>, action: AppendColor) {
    return this.colorsSvc.append(action.color).pipe(
      tap(() => {
        ctx.dispatch(new RefreshColors());
      })
    );
  }

  @Action(RemoveColor)
  removeColor(ctx: StateContext<ColorsStateModel>, action: RemoveColor) {
    return this.colorsSvc.remove(action.colorId).pipe(
      tap(() => {
        ctx.dispatch(new RefreshColors());
      })
    );
  }
}
