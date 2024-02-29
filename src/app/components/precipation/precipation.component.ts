import { Component, Input } from '@angular/core';
import { CardComponent } from '../utils/card/card.component';

@Component({
  selector: 'Precipation',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './precipation.component.html',
  styleUrl: './precipation.component.scss'
})
export class PrecipationComponent {
  @Input() precipation: number = 0
}
