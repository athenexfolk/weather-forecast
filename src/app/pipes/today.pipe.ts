import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'today',
  standalone: true,
})
export class TodayPipe implements PipeTransform {
  transform(value: string): string {
    const day = new Date(value);
    const today = new Date();
    if (isNaN(day.getTime())) {
      return value;
    }

    return day.getDay() === today.getDay() ? 'วันนี้' : value;
  }
}
