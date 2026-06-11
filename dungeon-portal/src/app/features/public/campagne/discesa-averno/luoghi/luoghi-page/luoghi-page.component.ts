import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LuogoCardComponent } from '../luogo-card/luogo-card.component';
import { CampagnaDataService, Luogo } from '../../campagna-data.service';

interface GruppoLuoghi {
  sessione: number;
  anchor: string;
  luoghi: Luogo[];
}

interface ViewModel {
  gruppi: GruppoLuoghi[];
  nomiPersonaggi: Map<string, string>;
}

@Component({
  selector: 'app-luoghi-page',
  standalone: true,
  imports: [CommonModule, LuogoCardComponent],
  templateUrl: './luoghi-page.component.html',
  styleUrl: './luoghi-page.component.css',
})
export class LuoghiPageComponent {
  vm$: Observable<ViewModel>;

  constructor(private dati: CampagnaDataService) {
    this.vm$ = combineLatest([
      this.dati.getLuoghi(),
      this.dati.getPersonaggiNomeMap(),
    ]).pipe(
      map(([luoghi, nomiPersonaggi]) => ({
        gruppi: this.raggruppaPerSessione(luoghi),
        nomiPersonaggi,
      }))
    );
  }

  scrollTo(event: Event, anchor: string): void {
    event.preventDefault();
    if (typeof window === 'undefined') return;
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  totale(gruppi: GruppoLuoghi[]): number {
    return gruppi.reduce((acc, g) => acc + g.luoghi.length, 0);
  }

  private raggruppaPerSessione(luoghi: Luogo[]): GruppoLuoghi[] {
    const mappa = new Map<number, Luogo[]>();
    for (const l of luoghi) {
      const s = l.primaApparizione ?? 0;
      if (!mappa.has(s)) mappa.set(s, []);
      mappa.get(s)!.push(l);
    }
    return [...mappa.entries()]
      .sort((a, b) => a[0] - b[0])
      .map(([sessione, gruppo]) => ({
        sessione,
        anchor: `sessione-${sessione}`,
        luoghi: gruppo,
      }));
  }
}
