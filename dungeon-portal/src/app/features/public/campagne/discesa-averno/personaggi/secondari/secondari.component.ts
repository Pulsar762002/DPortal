import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PersonaggioCardComponent } from '../principali/personaggio-card/personaggio-card.component';
import { CampagnaDataService, Personaggio } from '../../campagna-data.service';

@Component({
  selector: 'app-secondari',
  standalone: true,
  imports: [CommonModule, PersonaggioCardComponent],
  templateUrl: './secondari.component.html',
  styleUrl: './secondari.component.css',
})
export class SecondariComponent {
  personaggi$: Observable<Personaggio[]>;

  constructor(private dati: CampagnaDataService) {
    this.personaggi$ = this.dati.getPersonaggi().pipe(
      map(lista => lista.filter(p => p.categoria === 'secondario'))
    );
  }
}
