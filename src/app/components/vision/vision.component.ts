import { Component, Input } from '@angular/core';
import { CardComponent } from '../utils/card/card.component';

@Component({
  selector: 'Vision',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.scss',
})
export class VisionComponent {
  @Input() vision: number = 0;
}
