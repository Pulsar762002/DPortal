import { Component } from '@angular/core';
import {LuogoCardComponent} from '../../luogo-card/luogo-card.component';

@Component({
  selector: 'app-taverna-canto-elfico-piano-primo',
  imports: [
    LuogoCardComponent
  ],
  templateUrl: './taverna-canto-elfico-piano-primo.component.html',
  styleUrl: './taverna-canto-elfico-piano-primo.component.css',
})
export class TavernaCantoElficoPianoPrimoComponent {
  nome = `Mappa taverna del Canto Elfico Primo Piano`;

  descrizione = `
   La mappa del primo piano della taverna del Canto Elfico
   Questo e' il luogo nel quale Aelar, Alaster e Nathan hanno incontrato Elis e Tarina
  `;

  immagine = 'assets/luoghi/sessione-3/TavernaCantoElficoPianoPrimo.png'; // metti qui il path corretto
}
