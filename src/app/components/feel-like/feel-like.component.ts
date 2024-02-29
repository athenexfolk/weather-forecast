import { Component, Input } from '@angular/core';
import { CardComponent } from '../utils/card/card.component';
import { FloorPipe } from '../../pipes/floor.pipe';

@Component({
  selector: 'FeelLike',
  standalone: true,
  imports: [CardComponent, FloorPipe],
  templateUrl: './feel-like.component.html',
  styleUrl: './feel-like.component.scss'
})
export class FeelLikeComponent {
  @Input() currentTemp: number = 0;
  @Input() feelLike: number = 0
}
