import { State, Action, StateContext } from '@ngxs/store';

import { Color, NewColor } from 'src/app/color-tool/models/colors';

export class AppendColor {
  static readonly type = '[Colors] Append Color';
  constructor(public color: NewColor) {}
}

export class RemoveColor {
  static readonly type = '[Colors] Remove Color';
  constructor(public colorId: number) {}
}

@State<Color[]>({
  name: 'colors',
  defaults: [
    { id: 1, name: 'red', hexcode: 'ff0000' },
    { id: 2, name: 'green', hexcode: '00ff00' },
    { id: 3, name: 'blue', hexcode: '0000ff' },
  ],
})
export class ColorsState {
  @Action(AppendColor)
  appendColor(ctx: StateContext<Color[]>, action: AppendColor) {
    const state = ctx.getState();
    ctx.setState([
      ...state,
      {
        ...action.color,
        id: Math.max(...state.map((c) => c.id), 0) + 1,
      },
    ]);
  }

  @Action(RemoveColor)
  removeColor(ctx: StateContext<Color[]>, action: RemoveColor) {
    const state = ctx.getState();
    ctx.setState(state.filter((c) => c.id !== action.colorId));
  }
}
