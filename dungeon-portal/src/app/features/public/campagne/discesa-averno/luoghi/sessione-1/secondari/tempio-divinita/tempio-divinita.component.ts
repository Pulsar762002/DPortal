import { Component } from '@angular/core';
import {LuogoSecondarioCardComponent} from '../../../luogo-secondario-card/luogo-secondario-card.component';

@Component({
  selector: 'app-tempio-divinita',
  imports: [
    LuogoSecondarioCardComponent
  ],
  standalone: true,
  templateUrl: './tempio-divinita.component.html',
  styleUrl: './tempio-divinita.component.css',
})
export class TempioDivinitaComponent {
  nome = 'Tempio delle Divinità';

  descrizione = `
  Santuario principale della città. Qui Nathan affronta il conflitto con Marcus e il tema del dovere
contro la vocazione personale.  `;
}
