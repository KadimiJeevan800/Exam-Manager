import { createReducer, on } from '@ngrx/store';
import { intialStateofCounter } from './counter.state';
import { Increment, Reset, decrement } from './counter.actions';
import { state } from '@angular/animations';

const _coonterReducer = createReducer(
  intialStateofCounter,
  on(Increment, (state) => {
    return {
      ...state,
      count: state.count + 1,
      name: 'Increment Action Performed',
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      count: state.count - 1,
      name: 'Decrement Action Performed',
    };
  }),
  on(Reset, (state) => {
    return {
      ...state,
      count: 0,
      name: 'Reset Action Performed',
    };
  })
);

export function counterReducer(state: any, action: any) {
  return _coonterReducer(state, action);
}
