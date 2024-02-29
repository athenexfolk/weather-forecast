import { Component, Input } from '@angular/core';
import { CardComponent } from '../utils/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'Wind',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './wind.component.html',
  styleUrl: './wind.component.scss'
})
export class WindComponent {
  @Input() speed = 0
  @Input() direction = ''
  @Input() degree = 0
}
