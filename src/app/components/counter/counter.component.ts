import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Detail} from '../../models/Detail';
import {
  DecrementCounter,
  DecrementCounterByTen,
  IncrementCounter,
  IncrementCounterByTen,
  IncrementCounterByHundred, DecrementCounterByHundred
} from '../../action/counter.actions';

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

  public counterActionUser(interaction, event) {
    const increment = interaction === 'increment';
    const decrement = interaction === 'decrement';

    const shiftAltPressed = event.shiftKey === true && event.altKey === true;
    const shiftPressed = event.shiftKey === true && event.altKey === false;
    const justClick = event.shiftKey === false && event.altKey === false;

    if (!interaction || !increment && !decrement) {
      throw new Error('Interaction not defined');
    }

    if (increment && shiftAltPressed) {
      this.store.dispatch(new IncrementCounterByHundred());
    }

    if (increment && shiftPressed) {
      this.store.dispatch(new IncrementCounterByTen());
    }

    if (increment && justClick) {
      this.store.dispatch(new IncrementCounter());
    }

    if (decrement && shiftAltPressed) {
      this.store.dispatch(new DecrementCounterByHundred());
    }

    if (decrement && shiftPressed) {
      this.store.dispatch(new DecrementCounterByTen());
    }

    if (decrement && justClick) {
      this.store.dispatch(new DecrementCounter());
    }
  }
}
