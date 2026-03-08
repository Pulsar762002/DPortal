import { Component } from '@angular/core';
import {LuogoSecondarioCardComponent} from '../../../luogo-secondario-card/luogo-secondario-card.component';

@Component({
  selector: 'app-seme-di-papavero',
  imports: [
    LuogoSecondarioCardComponent
  ],
  standalone: true,
  templateUrl: './seme-di-papavero.component.html',
  styleUrl: './seme-di-papavero.component.css',
})
export class SemeDiPapaveroComponent {
  nome = 'Il Seme di Papavero';

  descrizione = `
  Bottega dell’erborista Fernand Règlisse.
  `;
}
