import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaggioCardComponent } from '../personaggio-card/personaggio-card.component';

@Component({
  selector: 'app-kyran',
  standalone: true,
  imports: [CommonModule, PersonaggioCardComponent],
  templateUrl: './kyran.component.html',
  styleUrl: './kyran.component.css'
})
export class KyranComponent {

  nome = 'Elis';

  specieClasse = '?';

  descrizione = `
    Figura mascherata, riservata e competente, salvata dal
    gruppo dopo lo scontro con i goblin nel bosco. Non rivela facilmente i dettagli
    personali.
  `;

  ruolo = `
    Combattente agile / supporto; fornisce abilità arcane e
    tattiche non convenzionali.
  `;

  immagine = 'assets/personaggi/Party/KyranBig.png'; // metti qui il path corretto

}
