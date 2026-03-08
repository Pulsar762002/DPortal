import { Component } from '@angular/core';
import {LuogoCardComponent} from '../../../luoghi/luogo-card/luogo-card.component';

@Component({
  selector: 'app-la-fine-di-elturel',
  imports: [
    LuogoCardComponent
  ],
  templateUrl: './la-fine-di-elturel.component.html',
  styleUrl: './la-fine-di-elturel.component.css',
})
export class LaFineDiElturelComponent {
  nome = 'La fine di Elturel';

  descrizione = `
    Ciò che resta della città. Catene infernali, fuoco, cenere e disperazione.
Luogo di soccorso, scelte morali e nascita dell’alleanza definitiva.

  `;

  immagine = 'assets/luoghi/sessione-1/LaFineDiElturel.png'; // metti qui il path corretto
}
