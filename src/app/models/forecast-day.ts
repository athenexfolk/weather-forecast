import { Astro } from './astro';
import { Day } from './day';
import { Hour } from './hour';

export interface ForecastDay {
  astro: Astro;
  date: string;
  date_epoch: number;
  day: Day;
  hour: Hour[];
}
