import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PersonaggioCardComponent } from '../principali/personaggio-card/personaggio-card.component';
import { CampagnaDataService, Personaggio } from '../../campagna-data.service';

@Component({
  selector: 'app-minori',
  standalone: true,
  imports: [CommonModule, PersonaggioCardComponent],
  templateUrl: './minori.component.html',
  styleUrl: './minori.component.css',
})
export class MinoriComponent {
  personaggi$: Observable<Personaggio[]>;

  constructor(private dati: CampagnaDataService) {
    this.personaggi$ = this.dati.getPersonaggi().pipe(
      map(lista => lista.filter(p => p.categoria === 'avversario'))
    );
  }
}
