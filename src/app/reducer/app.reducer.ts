import {Detail} from '../models/Detail';
import {CounterStore} from '../store/counter.store';
import {CounterActionTypes} from '../constant/counter.constant';

const initialState: CounterStore = {
  count: 0,
  title: 'Empty counter',
  details: Array<Detail>()
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case CounterActionTypes.Increment:
      return {
        ...state,
        count: state.count + action.payload,
        details: [
          ...state.details,
          ({
            date: new Date(),
            userAction: 'increment by one',
            range: 'success',
            trending: 'trending-up'
          } as Detail)
        ]
      };

    case CounterActionTypes.IncrementByTen:
      return {
        ...state,
        count: state.count + action.payload,
        details: [
          ...state.details,
          ({
            date: new Date(),
            userAction: 'increment by ten',
            range: 'success',
            trending: 'trending-up'
          } as Detail)
        ]
      };

    case CounterActionTypes.IncrementByHundred:
      return {
        ...state,
        count: state.count + action.payload,
        details: [
          ...state.details,
          ({
            date: new Date(),
            userAction: 'increment by hundred',
            range: 'success',
            trending: 'trending-up'
          } as Detail)
        ]
      };

    case CounterActionTypes.Decrement:
      return {
        ...state,
        count: state.count - action.payload,
        details: [
          ...state.details,
          ({
            date: new Date(),
            userAction: 'decrement by one',
            range: 'warning',
            trending: 'trending-down'
          } as Detail)
        ]
      };

    case CounterActionTypes.DecrementByTen:
      return {
        ...state,
        count: state.count - action.payload,
        details: [
          ...state.details,
          ({
            date: new Date(),
            userAction: 'decrement by ten',
            range: 'warning',
            trending: 'trending-down'
          } as Detail)
        ]
      };

    case CounterActionTypes.DecrementByHundred:
      return {
        ...state,
        count: state.count - action.payload,
        details: [
          ...state.details,
          ({
            date: new Date(),
            userAction: 'increment by hundred',
            range: 'warning',
            trending: 'trending-down'
          } as Detail)
        ]
      };

    case CounterActionTypes.Reset:
      return {
        ...state,
        count: state.count = action.payload,
        details: [
          ...state.details,
          ({
            date: new Date(),
            userAction: 'reset to zero',
            range: 'danger',
            trending: 'arrow-round-down'
          })
        ]
      };

    default:
      return state;
  }
}
