import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personaggio-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personaggio-card.component.html',
  styleUrl: './personaggio-card.component.css'
})
export class PersonaggioCardComponent {

  @Input() nome!: string;
  @Input() specieClasse!: string;
  @Input() descrizione!: string;
  @Input() ruolo!: string;
  @Input() immagine!: string;

}
