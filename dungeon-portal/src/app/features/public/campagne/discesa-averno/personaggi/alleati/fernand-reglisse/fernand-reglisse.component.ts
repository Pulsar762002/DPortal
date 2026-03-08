import { Component } from '@angular/core';
import {PersonaggioCardComponent} from '../../principali/personaggio-card/personaggio-card.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-fernand-reglisse',
  standalone: true,
  imports: [CommonModule, PersonaggioCardComponent],
  templateUrl: './fernand-reglisse.component.html',
  styleUrl: './fernand-reglisse.component.css',
})
export class FernandReglisseComponent {
  nome = 'Fernand Règlisse';

  specieClasse = 'Umano erborista';

  descrizione = `
    Erborista locale di Elturel, all’inizio protagonista di una
missione di scorta. Appare trasandato e in difficoltà dopo la caduta di Elturel.
  `;

  ruolo = `
    Iniziale committente della missione di scorta; simbolo della
fragilità post-disastro, incapace di aiutare i feriti per mancanza di risorse.
  `;

  immagine = 'assets/personaggi/Alleati/FernandRèglisse.png'; // metti qui il path corretto
}
