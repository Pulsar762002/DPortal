import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PersonaggioCardComponent } from './personaggio-card/personaggio-card.component';
import { CampagnaDataService, PersonaggioCardVM } from '../../campagna-data.service';

@Component({
  selector: 'app-principali',
  standalone: true,
  imports: [CommonModule, PersonaggioCardComponent],
  templateUrl: './principali.component.html',
  styleUrl: './principali.component.css'
})
export class PrincipaliComponent {
  personaggi$: Observable<PersonaggioCardVM[]>;

  constructor(private dati: CampagnaDataService) {
    this.personaggi$ = this.dati.getCardsByCategoria('party');
  }
}
