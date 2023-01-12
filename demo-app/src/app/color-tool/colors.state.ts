import { State, Action, StateContext, Selector } from '@ngxs/store';

import { Color, NewColor } from 'src/app/color-tool/models/colors';

export class AppendColor {
  static readonly type = '[Colors] Append Color';
  constructor(public color: NewColor) {}
}

export class RemoveColor {
  static readonly type = '[Colors] Remove Color';
  constructor(public colorId: number) {}
}

export type ColorsStateModel = { colors: Color[] };

@State<ColorsStateModel>({
  name: 'colors',
  defaults: {
    colors: [
      { id: 1, name: 'red', hexcode: 'ff0000' },
      { id: 2, name: 'green', hexcode: '00ff00' },
      { id: 3, name: 'blue', hexcode: '0000ff' },
    ],
  },
})
export class ColorsState {
  @Selector()
  static colors(state: ColorsStateModel) {
    return state.colors;
  }

  @Action(AppendColor)
  appendColor(ctx: StateContext<ColorsStateModel>, action: AppendColor) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      colors: [
        ...state.colors,
        {
          ...action.color,
          id: Math.max(...state.colors.map((c) => c.id), 0) + 1,
        },
      ],
    });
  }

  @Action(RemoveColor)
  removeColor(ctx: StateContext<ColorsStateModel>, action: RemoveColor) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      colors: state.colors.filter((c) => c.id !== action.colorId),
    });
  }
}
