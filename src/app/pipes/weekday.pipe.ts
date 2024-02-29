import { Pipe, PipeTransform } from '@angular/core';

const weekdayTH = ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'];

@Pipe({
  name: 'weekday',
  standalone: true,
})
export class WeekdayPipe implements PipeTransform {
  transform(value: string): string {
    const day = new Date(value);
    if (isNaN(day.getTime())) {
      return value;
    }

    return weekdayTH[day.getDay()];
  }
}
