import { Component } from '@angular/core';
import {LuogoCardComponent} from '../../luogo-card/luogo-card.component';

@Component({
  selector: 'app-accampamento',
  imports: [
    LuogoCardComponent
  ],
  templateUrl: './accampamento.component.html',
  styleUrl: './accampamento.component.css',
})
export class AccampamentoComponent {
  nome = `Accampamento verso Baldur's Gate`;

  descrizione = `
   Accampamento di profughi in fuga da Elturel verso Baldur's gate. E' qui che avviene l'attacco al gruppo
   durante il viaggio verso la citta'
  `;

  immagine = 'assets/luoghi/sessione-2/AccampamentoSessione2.png'; // metti qui il path corretto
}
