import { Component } from '@angular/core';
import {LuogoCardComponent} from '../../luogo-card/luogo-card.component';

@Component({
  selector: 'app-taverna-canto-elfico-piano-terra',
  imports: [
    LuogoCardComponent
  ],
  templateUrl: './taverna-canto-elfico-piano-terra.component.html',
  styleUrl: './taverna-canto-elfico-piano-terra.component.css',
})
export class TavernaCantoElficoPianoTerraComponent {
  nome = `Mappa taverna del Canto Elfico Piano Terra`;

  descrizione = `
   La mappa del piano terra della taverna del Canto Elfico
   Questo e' il luogo nel quale Aelar, Alaster, Elis e Nathan interagiscono con Alan
   (il proprietario della taverna) e combattono contro i Pirati che stavano braccando Tarina.
  `;

  immagine = 'assets/luoghi/sessione-3/TavernaCantoElficoPianoTerra.png'; // metti qui il path corretto
}
