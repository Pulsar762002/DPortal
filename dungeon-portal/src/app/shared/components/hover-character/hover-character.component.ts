import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personaggio } from '../../../features/public/campagne/discesa-averno/campagna-data.service';
import { PersonaggioCardComponent } from
    '../../../features/public/campagne/discesa-averno/personaggi/principali/personaggio-card/personaggio-card.component';

@Component({
  selector: 'app-hover-character',
  standalone: true,
  imports: [CommonModule, PersonaggioCardComponent],
  templateUrl: './hover-character.component.html',
  styleUrl: './hover-character.component.css',
})
export class HoverCharacterComponent {
  @Input() p!: Personaggio;

  isVisible = false;
  show() { this.isVisible = true; }
  hide() { this.isVisible = false; }
}
