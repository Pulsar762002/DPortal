import { Component } from '@angular/core';
import {PersonaggioCardComponent} from '../../principali/personaggio-card/personaggio-card.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-nue-hillstar',
  standalone: true,
  imports: [CommonModule, PersonaggioCardComponent],
  templateUrl: './nue-hillstar.component.html',
  styleUrl: './nue-hillstar.component.css',
})
export class NueHillstar {
  nome = 'Nue Hillstar';

  specieClasse = 'Umana tessitrice';

  descrizione = `
    Rifugiata di colore incontrata nella carovana. Calma e
composta nonostante tutto.
  `;

  ruolo = `
   Voce reale dei civili sopravvissuti, narratrice dello shock e della
perdita.
  `;

  immagine = 'assets/personaggi/Alleati/NueHillstar.png'; // metti qui il path corretto
}
