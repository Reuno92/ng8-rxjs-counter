import { Action } from '@ngrx/store';

export class IncrementCounter implements Action {
  type = '[Counter] Increment';
  constructor(public payload: number) {}
}

export class DecrementCounter implements Action {
  type = '[Counter] Decrement';

  constructor(public payload: number) {}
}
