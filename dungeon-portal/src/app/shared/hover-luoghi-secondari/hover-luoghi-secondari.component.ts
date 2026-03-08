import {Component, Input} from '@angular/core';
import {LuogoCardComponent} from '../../features/public/campagne/discesa-averno/luoghi/luogo-card/luogo-card.component';
import {CommonModule, NgIf} from '@angular/common';
import {
  LuogoSecondarioCardComponent
} from '../../features/public/campagne/discesa-averno/luoghi/luogo-secondario-card/luogo-secondario-card.component';

@Component({
  selector: 'app-hover-luoghi-secondari',
  standalone: true,
  imports: [CommonModule, LuogoSecondarioCardComponent],
  templateUrl: './hover-luoghi-secondari.component.html',
  styleUrl: './hover-luoghi-secondari.component.css',
})
export class HoverLuoghiSecondariComponent {
  @Input() nome!: string;
  @Input() descrizione!: string;

  isVisible = false;

  show() {
    this.isVisible = true;
  }

  hide() {
    this.isVisible = false;
  }
}
