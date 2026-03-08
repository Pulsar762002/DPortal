import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaggioCardComponent } from '../personaggio-card/personaggio-card.component';

@Component({
  selector: 'app-elis',
  standalone: true,
  imports: [CommonModule, PersonaggioCardComponent],
  templateUrl: './elis.component.html',
  styleUrl: './elis.component.css'
})
export class ElisComponent {

  nome = 'Elis';

  specieClasse = '?';

  descrizione = `

  `;

  ruolo = `

  `;

  immagine = 'assets/personaggi/Party/ElisBig.png'; // metti qui il path corretto

}
