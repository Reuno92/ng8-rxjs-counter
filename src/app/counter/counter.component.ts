import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  public total: number;

  constructor(private store: Store<any>) {
    this.total = 0;
  }

  public ngOnInit(): void {
  }

  public increment(): number {
    return this.total += 1;
    this.store.dispatch({ type: 'INCREMENT', payload: 1});
  }

  public decrement(): number {
    return this.total -= 1;
    this.store.dispatch({type: 'DECREMENT', payload: -1})
  }
}
