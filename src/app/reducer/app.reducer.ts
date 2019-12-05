import { CounterStore } from '../store/counter.store';
import {State} from '@ngrx/store';

const initialState: State = {
  count: 0,
  title: 'Counter empty'
};

export function reducer(state = initialState, action) {
  console.log('Reducer !: ', action);
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.payload
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - action.payload
      };
    default:
      return state;
  }
}
