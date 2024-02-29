import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ForecastResponse } from '../models/weather-data';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly weatherEndpoint = `${environment.baseUrl}`;

  constructor(private http: HttpClient) {}

  getToday() {
    return this.http.get<ForecastResponse>(`${this.weatherEndpoint}/forecast.json`, {
      params: {
        q: '16.479666,102.818583',
        days: 7,
      },
    });
  }
}
