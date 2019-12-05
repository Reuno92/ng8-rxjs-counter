import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Detail} from '../../models/Detail';
import {
  DecrementCounter,
  DecrementCounterByTen,
  IncrementCounter,
  IncrementCounterByTen,
  IncrementCounterByHundred,
  DecrementCounterByHundred,
  ResetCounter
} from '../../action/counter.actions';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  public title: string;
  public total: number;
  public minTotal: number;
  public allDetails: Array<Detail>;

  private readonly possibleInteraction: Array<string> = ['increment', 'decrement', 'reset'];

  constructor(
    private store: Store<any>,
    private toastr: ToastrService) {
    this.minTotal = 0;
  }

  public ngOnInit(): void {
    // this.store.subscribe( data => this.total = data.count);  // # Don't work !
    this.store.pipe(select('counterState'))
      .subscribe((data: any) => {
        this.total = data.count;
        this.title = data.title;
        this.allDetails = data.details;
      });
  }

  public counterActionUser(interaction: string, event: any): void {
    this.counterDispatchAction(interaction, event);
  }

  private counterDispatchAction(interaction: string, event: any): void {
    const increment = interaction === this.possibleInteraction[0];
    const decrement = interaction === this.possibleInteraction[1];
    const reset = interaction === this.possibleInteraction[2];

    const shiftAltPressed = event.shiftKey === true && event.altKey === true;
    const shiftPressed = event.shiftKey === true && event.altKey === false;
    const justClick = event.shiftKey === false && event.altKey === false;

    if (!interaction || !this.possibleInteraction.includes(interaction)) {
      const ERROR = `The interaction "${interaction}" not permitted`;
      this.toastr.error(
        ERROR,
        'Major error',
        {timeOut: 3000, closeButton: true}
      );
      throw new Error(ERROR);
    }

    if (reset) {
      this.isAlreadyZero(new ResetCounter());
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
      this.isMinimal(new DecrementCounterByHundred(), 100);
    }

    if (decrement && shiftPressed) {
      this.isMinimal(new DecrementCounterByTen(), 10);
    }

    if (decrement && justClick) {
      this.isMinimal(new DecrementCounter(), 1);
    }
  }

  private isMinimal(action, currentOperation?) {
    const testBelowMinimal = this.total > this.minTotal;
    const testWithCurrentTotal = (this.total - currentOperation) >= this.minTotal;

    testBelowMinimal && testWithCurrentTotal ?
      this.store.dispatch(action) :
      this.toastr.error(
        `Counter can't be under ${this.minTotal}`,
        `Minor error`,
        {timeOut: 3000, closeButton: true}
      );
  }

  private isAlreadyZero(action) {
    const isEqualZeroAlready = this.total === this.minTotal;

    isEqualZeroAlready ?
      this.toastr.error(
        `Counter is already at ${this.minTotal}`,
        `Minor error`,
        {timeOut: 3000, closeButton: true}
      ) :
      this.store.dispatch(action);
  }
}
