import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personaggio } from '../../../campagna-data.service';

@Component({
  selector: 'app-personaggio-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personaggio-card.component.html',
  styleUrl: './personaggio-card.component.css',
})
export class PersonaggioCardComponent {
  @Input() p!: Personaggio;

  notesExpanded = false;

  get specieClasse(): string {
    const parts = [
      this.p.razza,
      this.p.eta && this.p.eta !== 'Ignota' ? `(${this.p.eta})` : null,
    ].filter(Boolean);
    return parts.join(' ') || '—';
  }
}
