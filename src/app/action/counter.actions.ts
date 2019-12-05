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

export class IncrementCounterByHundred implements Action {
  type = CounterActionTypes.IncrementByHundred;
  payload = 100;
}

export class DecrementCounter implements Action {
  type = CounterActionTypes.Decrement;
  payload = 1;
}

export class DecrementCounterByTen implements Action {
  type = CounterActionTypes.DecrementByTen;
  payload = 10;
}

export class DecrementCounterByHundred implements Action {
  type = CounterActionTypes.DecrementByHundred;
  payload = 100;
}

export class ResetCounter implements Action {
  type = CounterActionTypes.Reset;
  payload = 0;
}
