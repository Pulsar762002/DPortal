import { Component } from '@angular/core';
import {PersonaggioCardComponent} from '../../principali/personaggio-card/personaggio-card.component';

@Component({
  selector: 'app-zodge',
  imports: [
    PersonaggioCardComponent
  ],
  templateUrl: './zodge.component.html',
  styleUrl: './zodge.component.css',
})
export class ZodgeComponent {
  nome = 'Capitano Zodge';

  specieClasse = 'Umano / Capitano dei Pugni Fiammanti';

  descrizione = `
    E' uno dei capitani in grado per il controllo dell'accesso in Baldur's Gate tramite la Porta del Basilisco.
  `;

  ruolo = `
    Ingaggia i nostri avventurieri con la promessa che, una volta soddisfatti i suoi comandi,
    potranno accedere come liberi a Baldur's Gate.
    L'incarico affidato agli avventurieri e' quello di raccogliere informazioni sul Culto dei Tre Morti.
  `;

  immagine = 'assets/personaggi/Secondari/Zodge.png'; // metti qui il path corretto
}
