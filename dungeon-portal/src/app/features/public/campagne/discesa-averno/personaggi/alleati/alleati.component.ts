import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PersonaggioCardComponent } from '../principali/personaggio-card/personaggio-card.component';
import { CampagnaDataService, PersonaggioCardVM } from '../../campagna-data.service';

@Component({
  selector: 'app-alleati',
  standalone: true,
  imports: [CommonModule, PersonaggioCardComponent],
  templateUrl: './alleati.component.html',
  styleUrl: './alleati.component.css',
})
export class AlleatiComponent {
  personaggi$: Observable<PersonaggioCardVM[]>;

  constructor(private dati: CampagnaDataService) {
    this.personaggi$ = this.dati.getCardsByCategoria('alleato');
  }
}
