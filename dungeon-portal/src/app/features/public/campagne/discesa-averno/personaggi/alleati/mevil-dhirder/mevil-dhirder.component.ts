import { Component } from '@angular/core';
import {PersonaggioCardComponent} from '../../principali/personaggio-card/personaggio-card.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-mevil-dhirder',
  standalone: true,
  imports: [CommonModule, PersonaggioCardComponent],
  templateUrl: './mevil-dhirder.component.html',
  styleUrl: './mevil-dhirder.component.css',
})
export class MevilDhirderComponent {
  nome = 'Mevil Dhirder';

  specieClasse = 'Umana profuga giovane';

  descrizione = `
    Giovane dal volto fanciullesco, figlia di un fornaio. Timida
ma capace.
  `;

  ruolo = `
    Supporto narrativo umano — la gioventù traumatizzata dal
cataclisma.
  `;

  immagine = 'assets/personaggi/Alleati/MevilDhirder.png'; // metti qui il path corretto
}
