import { Detail } from '../models/Detail';
import {CounterStore} from '../store/counter.store';

const initialState: CounterStore = {
  count: 0,
  title: 'Empty counter',
  details: Array<Detail>()
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case '[Counter] Increment':
      return {
        ...state,
        count: state.count + action.payload,
        details: [
          ...state.details,
          ({
            date: new Date(),
            userAction: 'increment by one'
          } as Detail)
        ]
      };

    case '[Counter] Decrement':
      return {
        ...state,
        count: state.count - action.payload,
        details: [
          ...state.details,
          ({
            date: new Date(),
            userAction: 'decrement by one'
          } as Detail)
        ]
      };
    default:
      return state;
  }
}
