import { Component } from '@angular/core';
import {PersonaggioCardComponent} from '../../principali/personaggio-card/personaggio-card.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-gullivan-ardic',
  standalone: true,
  imports: [CommonModule, PersonaggioCardComponent],
  templateUrl: './gullivan-ardic.component.html',
  styleUrl: './gullivan-ardic.component.css',
})
export class GullivanArdicComponent {
  nome = 'Gullivan Ardic';

  specieClasse = 'Halfling ex vignaiolo';

  descrizione = `
    Personaggio vivace e un po’ comico, parla di vini e nobiltà
nelle occasioni meno opportune.
  `;

  ruolo = `
    Parte della carovana dei sopravvissuti; fornisce momenti di
leggerezza e flavor narrativo.
  `;

  immagine = 'assets/personaggi/Alleati/GullivanArdic.png'; // metti qui il path corretto
}
