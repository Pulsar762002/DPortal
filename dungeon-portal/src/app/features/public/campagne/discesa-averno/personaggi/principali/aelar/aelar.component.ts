import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaggioCardComponent } from '../personaggio-card/personaggio-card.component';

@Component({
  selector: 'app-aelar',
  standalone: true,
  imports: [CommonModule, PersonaggioCardComponent],
  templateUrl: './aelar.component.html',
  styleUrl: './aelar.component.css'
})
export class AelarComponent {

  nome = 'Aelar Thaedrim Liadon';

  specieClasse = 'Elfo Alto – Blood Hunter (Ordine dei Mutanti)';

  descrizione = `
    Elfo silenzioso e disciplinato, cresciuto nelle foreste del Cormanthor.
    Porta con sé Aeren, un gufo-spettrale legato al suo sangue e alla sua volontà.
    Osservatore attento, preferisce la strategia al caos.
  `;

  ruolo = `
    Cacciatore e osservatore tattico.
    Forte nelle esplorazioni e negli scontri a distanza.
    È spesso il primo ad analizzare scenari e pericoli.
  `;

  immagine = 'assets/personaggi/Party/AelarBig.png'; // metti qui il path corretto

}
