import { CounterStore } from '../store/counter.store';
import {State} from '@ngrx/store';

const initialState: State<CounterStore> = {
  count: 0,
  title: 'Empty counter'
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.payload,
      };

    case 'DECREMENT':
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
}
