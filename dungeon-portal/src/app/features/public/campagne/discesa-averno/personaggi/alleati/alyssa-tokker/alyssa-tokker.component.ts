import { Component } from '@angular/core';
import {PersonaggioCardComponent} from '../../principali/personaggio-card/personaggio-card.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-alyssa-tokker',
  standalone: true,
  imports: [CommonModule, PersonaggioCardComponent],
  templateUrl: './alyssa-tokker.component.html',
  styleUrl: './alyssa-tokker.component.css',
})
export class AlyssaTokkerComponent {
  nome = 'Alyssa Tokker';

  specieClasse = 'Umana profuga';

  descrizione = `
   Donna incinta salvata dalla caduta, moglie di Darsus. Forte e determinata.
  `;

  ruolo = `
    Rappresentante di civili con esigenze urgenti; motiva il gruppo a proseguire con compassione.
  `;

  immagine = 'assets/personaggi/Alleati/AlyssaTokker.png'; // metti qui il path corretto
}
