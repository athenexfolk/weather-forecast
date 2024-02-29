import { Component, Input } from '@angular/core';
import { CardComponent } from '../utils/card/card.component';

@Component({
  selector: 'Humudity',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './humudity.component.html',
  styleUrl: './humudity.component.scss'
})
export class HumudityComponent {
  @Input() humidity: number = 0;
}
