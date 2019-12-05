import {Detail} from '../models/Detail';

export interface CounterStore {
  count: number;
  title: string;
  details: Array<Detail>;
}
