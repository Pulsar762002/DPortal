import { Component } from '@angular/core';
import {PersonaggioCardComponent} from '../../principali/personaggio-card/personaggio-card.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-darsus-bell',
  standalone: true,
  imports: [CommonModule, PersonaggioCardComponent],
  templateUrl: './darsus-bell.component.html',
  styleUrl: './darsus-bell.component.css',
})
export class DarsusBellComponent {
  nome = 'Darsus Bell';

  specieClasse = 'Umano profugo';

  descrizione = `
  Marito di Alissa e contadino, preoccupato per la moglie e il
futuro.
  `;

  ruolo = `
    PNG di supporto alla narrativa civile e rafforzamento del tema
della sopravvivenza familiare.
  `;

  immagine = 'assets/personaggi/Alleati/DarsusBell.png'; // metti qui il path corretto
}
