import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Detail} from '../models/Detail';
import {IncrementCounter} from '../action/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  public title: string;
  public total: number;
  public allDetails: Array<Detail>;

  constructor(private store: Store<any>) {}

  public ngOnInit(): void {
    // this.store.subscribe( data => this.total = data.count);  // # Don't work !
    this.store.pipe(select('counterState'))
      .subscribe((data) => {
        this.total = data.count;
        this.title = data.title;
        this.allDetails = data.details;
      });
  }

  public increment(): void {
    //this.store.dispatch({ type: 'INCREMENT', payload: 1});
    this.store.dispatch(new IncrementCounter(1));
  }

  public decrement(): void {
    this.store.dispatch({type: 'DECREMENT', payload: 1});
  }
}
