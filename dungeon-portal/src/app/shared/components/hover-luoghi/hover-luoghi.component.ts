import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Luogo } from '../../../features/public/campagne/discesa-averno/campagna-data.service';
import { LuogoCardComponent } from
    '../../../features/public/campagne/discesa-averno/luoghi/luogo-card/luogo-card.component';

@Component({
  selector: 'app-hover-luoghi',
  standalone: true,
  imports: [CommonModule, LuogoCardComponent],
  templateUrl: './hover-luoghi.component.html',
  styleUrl: './hover-luoghi.component.css',
})
export class HoverLuoghiComponent {
  @Input() l!: Luogo;

  isVisible = false;
  show() { this.isVisible = true; }
  hide() { this.isVisible = false; }
}
