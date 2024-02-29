import { Component, Input } from '@angular/core';
import { CardComponent } from '../utils/card/card.component';

@Component({
  selector: 'Pressure',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './pressure.component.html',
  styleUrl: './pressure.component.scss'
})
export class PressureComponent {
  @Input() pressure: number = 0
}
