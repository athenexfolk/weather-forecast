import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundFloor',
  standalone: true,
})
export class FloorPipe implements PipeTransform {
  transform(value: number): number {
    const intValue = Math.floor(value);
    const decimalPart = value - intValue;

    if (decimalPart >= 0.5) {
      return intValue + 1;
    } else {
      return intValue;
    }
  }
}
