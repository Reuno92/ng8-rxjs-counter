import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {CounterStore} from '../store/counter.store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  public title: string;
  public total: number;

  constructor(private store: Store<CounterStore>) {}

  public ngOnInit(): void {
    // this.store.subscribe( data => this.total = data.count);  // # Don't work !
    this.store.pipe(select('counterState'))
      .subscribe((data: CounterStore) => {
        this.total = data.count;
        this.title = data.title;
      });
  }

  public increment(): void {
    this.store.dispatch({ type: 'INCREMENT', payload: 1});
  }

  public decrement(): void {
    this.store.dispatch({type: 'DECREMENT', payload: 1});
  }
}
