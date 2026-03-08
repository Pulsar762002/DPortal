import { Component } from '@angular/core';
import {LuogoCardComponent} from '../../../luoghi/luogo-card/luogo-card.component';

@Component({
  selector: 'app-elturel',
  imports: [
    LuogoCardComponent
  ],
  templateUrl: './elturel.component.html',
  styleUrl: './elturel.component.css',
})
export class ElturelComponent {
  nome = 'Elturel';

  descrizione = `
    Per oltre cinquant’anni, sopra Elturel ha brillato una sfera luminosa chiamata Compagno, un secondo “sole” sospeso nel cielo che illuminava giorno e notte la città con una luce dorata.
La sua presenza era simbolo di protezione divina e della forza morale degli eltureliani.

  `;

  immagine = 'assets/luoghi/sessione-1/Elturel.png'; // metti qui il path corretto
}
