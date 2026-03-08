import { Component } from '@angular/core';
import {LuogoCardComponent} from '../../luogo-card/luogo-card.component';

@Component({
  selector: 'app-baldurs-gate',
  standalone: true,
  imports: [
    LuogoCardComponent
  ],
  templateUrl: './baldurs-gate.component.html',
  styleUrl: './baldurs-gate.component.css',
})
export class BaldursGateComponent {
  nome = `Mappa di Baldur's Gate`;

  descrizione = `
   La mappa, visto dall'alto, della citta' di Baldur's Gate

  `;

  immagine = 'assets/luoghi/sessione-3/BaldursGate.png'; // metti qui il path corretto
}
