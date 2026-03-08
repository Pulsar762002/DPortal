import { Component } from '@angular/core';
import {LuogoSecondarioCardComponent} from '../../../luogo-secondario-card/luogo-secondario-card.component';

@Component({
  selector: 'app-orfanotrofio',
  imports: [
    LuogoSecondarioCardComponent
  ],
  standalone: true,
  templateUrl: './orfanotrofio.component.html',
  styleUrl: './orfanotrofio.component.css',
})
export class OrfanotrofioComponent {
  nome = 'Orfanotrofio di Marta (Elturel)';

  descrizione = `
   Luogo dell’infanzia di Nathan. Simbolo dell’innocenza e della vita quotidiana che andrà perduta
con la caduta della città.

  `;
}
