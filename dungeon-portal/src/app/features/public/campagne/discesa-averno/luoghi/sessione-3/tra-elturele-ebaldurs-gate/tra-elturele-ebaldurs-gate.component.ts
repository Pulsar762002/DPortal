import { Component } from '@angular/core';
import {LuogoCardComponent} from '../../luogo-card/luogo-card.component';

@Component({
  selector: 'app-tra-elturele-ebaldurs-gate',
  imports: [
    LuogoCardComponent
  ],
  templateUrl: './tra-elturele-ebaldurs-gate.component.html',
  styleUrl: './tra-elturele-ebaldurs-gate.component.css',
})
export class TraEltureleEbaldursGateComponent {
  nome = `Mappa di del territorio tra Elturel e Baldur's Gate`;

  descrizione = `
   La mappa, visto dall'alto, del territorio che divide Elturel e Baldur's Gate.

  `;

  immagine = 'assets/luoghi/sessione-3/TraEltureleEBaldursGate.png'; // metti qui il path corretto
}
