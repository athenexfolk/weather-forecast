import { Component, Input } from '@angular/core';
import { CardComponent } from '../utils/card/card.component';

@Component({
  selector: 'SunAppearance',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './sun-appearance.component.html',
  styleUrl: './sun-appearance.component.scss'
})
export class SunAppearanceComponent {
  @Input() sunrise = ''
  @Input() sunset = ''
}
