import { Component } from '@angular/core';
import {LuogoSecondarioCardComponent} from '../../../luogo-secondario-card/luogo-secondario-card.component';

@Component({
  selector: 'app-gilda-avventurieri',
  imports: [
    LuogoSecondarioCardComponent
  ],
  templateUrl: './gilda-avventurieri.component.html',
  styleUrl: './gilda-avventurieri.component.css',
})
export class GildaAvventurieriComponent {
  nome = 'Gilda degli Avventurieri di Elturel';

  descrizione = `
   Punto d’incontro tra Nathan e Aelar. Qui nasce la compagnia e viene accettata la prima missione.

  `;
}
