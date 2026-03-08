import { Component } from '@angular/core';
import {PersonaggioCardComponent} from '../../principali/personaggio-card/personaggio-card.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-bromas-rultild',
  standalone: true,
  imports: [CommonModule, PersonaggioCardComponent],
  templateUrl: './bromas-rultild.component.html',
  styleUrl: './bromas-rultild.component.css',
})
export class BromasRultildComponent {
  nome = 'Bromas Rultild';

  specieClasse = 'Umano mercante / capocarovana';

  descrizione = `
   Umano corpulento e bonario che guida una carovana di
profughi raccolti lungo la strada.
  `;

  ruolo = `
    Ospite e mezzo di trasporto verso Baldur’s Gate. Rappresenta le
masse civili sopravvissute.
  `;

  immagine = 'assets/personaggi/Alleati/BromasRultild.png'; // metti qui il path corretto
}
