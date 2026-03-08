import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaggioCardComponent } from '../personaggio-card/personaggio-card.component';

@Component({
  selector: 'app-nathan',
  standalone: true,
  imports: [CommonModule, PersonaggioCardComponent],
  templateUrl: './nathan.component.html',
  styleUrl: './nathan.component.css'
})
export class NathanComponent {

  nome = 'Nathan';

  specieClasse = 'Umano Paladino';

  descrizione = `
    Giovane paladino cresciuto a Elturel, devoto e severo nel suo
    senso del dovere. Porta sempre con sé un simbolo sacro e cerca di aiutare i
    civili e ordinare il caos.
  `;

  ruolo = `
    Difensore morale e fisico; spesso in prima linea nel
    soccorrere civili, respingere pericoli e guidare gli altri con la sua fede.
  `;

  immagine = 'assets/personaggi/Party/NathanBig.png'; // metti qui il path corretto

}
