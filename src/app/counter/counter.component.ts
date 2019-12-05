import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  public total: number;

  constructor() {
    this.total = 0;
  }

  public ngOnInit(): void {
  }

  public increment(): number {
    return this.total += 1;
  }

  public decrement(): number {
    return this.total -= 1;
  }
}
