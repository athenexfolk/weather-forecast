import { Component, Input } from '@angular/core';
import { CardComponent } from '../utils/card/card.component';

@Component({
  selector: 'UVIndex',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './uv-index.component.html',
  styleUrl: './uv-index.component.scss'
})
export class UvIndexComponent {
  @Input() uv: number = 0
}
