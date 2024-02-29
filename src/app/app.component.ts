import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './services/weather.service';
import { tap } from 'rxjs';
import { ForecastResponse } from './models/weather-data';
import { CommonModule } from '@angular/common';
import { FloorPipe } from './pipes/floor.pipe';
import { Clock12Pipe } from './pipes/clock12.pipe';
import { WeekdayPipe } from './pipes/weekday.pipe';
import { TodayPipe } from './pipes/today.pipe';
import { UvIndexComponent } from './components/uv-index/uv-index.component';
import { SunAppearanceComponent } from './components/sun-appearance/sun-appearance.component';
import { WindComponent } from './components/wind/wind.component';
import { PrecipationComponent } from './components/precipation/precipation.component';
import { PressureComponent } from './components/pressure/pressure.component';
import { HumudityComponent } from './components/humudity/humudity.component';
import { FeelLikeComponent } from './components/feel-like/feel-like.component';
import { VisionComponent } from './components/vision/vision.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FloorPipe,
    Clock12Pipe,
    WeekdayPipe,
    TodayPipe,
    UvIndexComponent,
    SunAppearanceComponent,
    FeelLikeComponent,
    HumudityComponent,
    PrecipationComponent,
    WindComponent,
    PressureComponent,
    VisionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'weather-forecast';

  weather: ForecastResponse | undefined;

  now = Math.floor(Date.now() / (1000 * 60 * 60));

  maxTemp: number = Number.NEGATIVE_INFINITY;
  minTemp: number = Number.POSITIVE_INFINITY;

  constructor(private ws: WeatherService) {}

  ngOnInit(): void {
    this.ws
      .getToday()
      .pipe(
        tap((a) => console.log(a)),
        tap((a) => {
          a.forecast.forecastday.forEach((fday) => {
            if (fday.day.maxtemp_c > this.maxTemp) {
              this.maxTemp = fday.day.maxtemp_c;
            }
            if (fday.day.mintemp_c < this.minTemp) {
              this.minTemp = fday.day.mintemp_c;
            }
          });
        })
      )
      .subscribe((w) => (this.weather = w));
  }
}
