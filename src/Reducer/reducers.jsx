import { DEC, INC } from './types';

const initialState = 0;

export function reducer(state = initialState, action) {
  switch (action.type) {
    case INC:
      return (state = state + 1);
    case DEC:
      return state > 0 ? state - 1 : state;
    default:
      return state;
  }
}
