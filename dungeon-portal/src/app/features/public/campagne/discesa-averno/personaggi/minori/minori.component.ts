import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PersonaggioCardComponent } from '../principali/personaggio-card/personaggio-card.component';
import { CampagnaDataService, PersonaggioCardVM } from '../../campagna-data.service';

@Component({
  selector: 'app-minori',
  standalone: true,
  imports: [CommonModule, PersonaggioCardComponent],
  templateUrl: './minori.component.html',
  styleUrl: './minori.component.css',
})
export class MinoriComponent {
  personaggi$: Observable<PersonaggioCardVM[]>;

  constructor(private dati: CampagnaDataService) {
    this.personaggi$ = this.dati.getCardsByCategoria('avversario');
  }
}
