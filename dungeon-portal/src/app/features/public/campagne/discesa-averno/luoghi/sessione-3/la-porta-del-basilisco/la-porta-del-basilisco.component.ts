import { Component } from '@angular/core';
import {LuogoCardComponent} from '../../luogo-card/luogo-card.component';

@Component({
  selector: 'app-la-porta-del-basilisco',
  imports: [
    LuogoCardComponent
  ],
  templateUrl: './la-porta-del-basilisco.component.html',
  styleUrl: './la-porta-del-basilisco.component.css',
})
export class LaPortaDelBasiliscoComponent {
  nome = `La porta del Basilisco`;

  descrizione = `
   Una delle porte di accesso alla citta' di Baldur's Gate.
   Qui, gli avventurieri, incontrano i Pugni Fiammeggianti ed il capitano Zodge
  `;

  immagine = 'assets/luoghi/sessione-3/LaPortaDelBasilisco.png'; // metti qui il path corretto
}
