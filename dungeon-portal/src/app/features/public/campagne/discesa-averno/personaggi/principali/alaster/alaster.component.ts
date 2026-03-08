import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaggioCardComponent } from '../personaggio-card/personaggio-card.component';

@Component({
  selector: 'app-alaster',
  standalone: true,
  imports: [CommonModule, PersonaggioCardComponent],
  templateUrl: './alaster.component.html',
  styleUrl: './alaster.component.css'
})
export class AlasterComponent {

  nome = 'Alaster Nodorovo';

  specieClasse = 'Umano nobile';

  descrizione = `
    Nobile di Baldur’s Gate di famiglia importante, inviato a
    Elturel per indagare prima della catastrofe. Ha perso la sua carrozza e ora
    viaggia con il gruppo.
  `;

  ruolo = `
   Voce razionale e politica. Offre conoscenze sociali,
    rapporti esterni e connessioni con Baldur’s Gate. Difensore leale ma
    pragmatico
  `;

  immagine = 'assets/personaggi/Party/AlasterBig.png'; // metti qui il path corretto

}
