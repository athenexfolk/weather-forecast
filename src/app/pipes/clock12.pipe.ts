import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clock12',
  standalone: true,
})
export class Clock12Pipe implements PipeTransform {
  transform(value: string): string {
    if (!value.match(/^([01][0-9]|2[0-3]):([0-5][0-9])$/)) {
      return value;
    }

    const hour = Number(value.split(':')[0]);

    if (hour === 0) return '12 AM';
    if (hour < 12) return hour + ' AM';
    return (hour - 12 === 0 ? '12' : hour - 12) + ' PM';
  }
}
