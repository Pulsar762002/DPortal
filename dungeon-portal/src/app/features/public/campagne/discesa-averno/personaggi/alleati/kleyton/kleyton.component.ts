import { Component } from '@angular/core';
import {PersonaggioCardComponent} from "../../principali/personaggio-card/personaggio-card.component";

@Component({
  selector: 'app-kleyton',
    imports: [
        PersonaggioCardComponent
    ],
  templateUrl: './kleyton.component.html',
  styleUrl: './kleyton.component.css',
})
export class KleytonComponent {
  nome = 'Kleyton';

  specieClasse = 'Coboldo';

  descrizione = `
    Personaggio vivace e un po’ comico, sempre pronto ad armeggiare per costruire nuove invenzioni.
  `;

  ruolo = `
    Viene incontrato nelle progioni e si aggrega alla compagnia che paga la sua cauzione.
  `;

  immagine = 'assets/personaggi/Alleati/Kleyton.jpg'; // metti qui il path corretto
}
