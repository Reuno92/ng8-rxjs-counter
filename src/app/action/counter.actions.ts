import { Action } from '@ngrx/store';
import { CounterActionTypes } from '../constant/counter.constant';

export class IncrementCounter implements Action {
  type = CounterActionTypes.Increment;
  payload = 1;
}

export class IncrementCounterByTen implements Action {
  type = CounterActionTypes.IncrementByTen;
  payload = 10;
}

export class DecrementCounter implements Action {
  type = CounterActionTypes.Decrement;
  payload = 1;
}
