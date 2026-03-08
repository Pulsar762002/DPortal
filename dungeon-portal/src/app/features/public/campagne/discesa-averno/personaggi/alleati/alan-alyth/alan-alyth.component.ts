import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaggioCardComponent } from '../../principali/personaggio-card/personaggio-card.component';

@Component({
  selector: 'app-alan-alyth',
  standalone: true,
  imports: [CommonModule, PersonaggioCardComponent],
  templateUrl: './alan-alyth.component.html',
  styleUrl: './alan-alyth.component.css'
})
export class AlanAlythComponent {

  nome = 'Alan Alyth';

  specieClasse = 'Elfo / Oste';

  descrizione = `
    Proprietario della "Taverna del Canto Elfico"
  `;

  ruolo = `
    Gestisce la taverna ed interagisce con il party.
  `;

  immagine = 'assets/personaggi/Alleati/Alan_alyth.png'; // metti qui il path corretto

}
