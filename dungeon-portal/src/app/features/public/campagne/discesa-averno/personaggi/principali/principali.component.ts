import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PersonaggioCardComponent } from './personaggio-card/personaggio-card.component';
import { CampagnaDataService, Personaggio } from '../../campagna-data.service';

@Component({
  selector: 'app-principali',
  standalone: true,
  imports: [CommonModule, PersonaggioCardComponent],
  templateUrl: './principali.component.html',
  styleUrl: './principali.component.css',
})
export class PrincipaliComponent {
  personaggi$: Observable<Personaggio[]>;

  constructor(private dati: CampagnaDataService) {
    this.personaggi$ = this.dati.getPersonaggi().pipe(
      map(lista => lista.filter(p => p.categoria === 'party'))
    );
  }
}
