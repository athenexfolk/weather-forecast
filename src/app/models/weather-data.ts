import { Current } from './current';
import { ForecastDay } from './forecast-day';
import { Location } from './location';

export interface ForecastResponse {
  location: Location;
  current: Current;
  forecast: {
    forecastday: ForecastDay[];
  };
}
