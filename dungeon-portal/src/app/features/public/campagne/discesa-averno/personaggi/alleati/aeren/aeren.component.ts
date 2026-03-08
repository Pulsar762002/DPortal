import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaggioCardComponent } from '../../principali/personaggio-card/personaggio-card.component';

@Component({
  selector: 'app-aeren',
  standalone: true,
  imports: [CommonModule, PersonaggioCardComponent],
  templateUrl: './aeren.component.html',
  styleUrl: './aeren.component.css'
})
export class AerenComponent {

  nome = 'Aeren';

  specieClasse = 'Gufo-spettrale / Compagno animale di Aelar';

  descrizione = `
    Servitore silenzioso di Aelar, sorveglia il campo dall’alto e
manda informazioni cruciali.
  `;

  ruolo = `
    Vedetta e perlustrazione aerea; invia messaggi mentali ad Aelar.
  `;

  immagine = 'assets/personaggi/Alleati/Aeren.png'; // metti qui il path corretto

}
