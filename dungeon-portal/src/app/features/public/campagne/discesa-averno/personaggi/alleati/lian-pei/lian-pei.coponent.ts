import { Component } from '@angular/core';
import {PersonaggioCardComponent} from '../../principali/personaggio-card/personaggio-card.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-lian-pei',
  standalone: true,
  imports: [CommonModule, PersonaggioCardComponent],
  templateUrl: './lian-pei.component.html',
  styleUrl: './lian-pei.component.css',
})
export class LianPeiComponent {
  nome = 'Lian Pei';

  specieClasse = 'Umano falegname';

  descrizione = `
    Uomo semplice che ha perso moglie e figlia nella caduta di
Elturel.
  `;

  ruolo = `
    Aiuta a riparare la carovana e la sua storia riflette le tragedie
personali dell’apocalisse.
  `;

  immagine = 'assets/personaggi/Alleati/LianPei.png'; // metti qui il path corretto
}
