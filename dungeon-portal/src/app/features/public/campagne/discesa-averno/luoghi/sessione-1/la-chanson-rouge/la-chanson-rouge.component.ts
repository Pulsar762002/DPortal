import { Component } from '@angular/core';
import {LuogoCardComponent } from '../../../luoghi/luogo-card/luogo-card.component';

@Component({
  selector: 'app-la-chanson-rouge',
  imports: [
    LuogoCardComponent
  ],
  templateUrl: './la-chanson-rouge.component.html',
  styleUrl: './la-chanson-rouge.component.css',
})
export class LaChansonRougeComponent {
  nome = 'La Chanson Rouge';

  descrizione = `
   Locanda vivace e affollata. Qui il gruppo incontra Fernand, ascolta il canto della tiefling e
stringe l’accordo per la missione di scorta.

  `;

  immagine = 'assets/luoghi/sessione-1/LaChansonRouge.png'; // metti qui il path corretto
}
