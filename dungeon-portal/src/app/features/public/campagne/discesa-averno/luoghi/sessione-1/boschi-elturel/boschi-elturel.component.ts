import { Component } from '@angular/core';
import {LuogoCardComponent } from '../../../luoghi/luogo-card/luogo-card.component';

@Component({
  selector: 'app-boschi-elturel',
  imports: [
    LuogoCardComponent
  ],
  templateUrl: './boschi-elturel.component.html',
  styleUrl: './boschi-elturel.component.css',
})
export class BoschiElturelComponent {
  nome = 'Boschi fuori Elturel';

  descrizione = `
   Zona selvaggia immediatamente oltre le mura.
Luogo della raccolta delle erbe, dell’imboscata dei goblin e del primo vero combattimento del
gruppo. Qui viene salvata Kyran.

  `;

  immagine = 'assets/luoghi/sessione-1/BoschiElturel.png'; // metti qui il path corretto
}
