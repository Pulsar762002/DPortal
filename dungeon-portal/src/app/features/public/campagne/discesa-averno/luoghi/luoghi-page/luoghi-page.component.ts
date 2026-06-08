import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LuogoCardComponent } from '../luogo-card/luogo-card.component';
import { CampagnaDataService, Luogo } from '../../campagna-data.service';

interface GruppoLuoghi {
  sessione: number;
  luoghi: Luogo[];
}

@Component({
  selector: 'app-luoghi-page',
  standalone: true,
  imports: [CommonModule, LuogoCardComponent],
  templateUrl: './luoghi-page.component.html',
  styleUrl: './luoghi-page.component.css',
})
export class LuoghiPageComponent {
  gruppi$: Observable<GruppoLuoghi[]>;

  constructor(private dati: CampagnaDataService) {
    this.gruppi$ = this.dati.getLuoghi().pipe(
      map(luoghi => this.raggruppaPerSessione(luoghi))
    );
  }

  private raggruppaPerSessione(luoghi: Luogo[]): GruppoLuoghi[] {
    const mappa = new Map<number, Luogo[]>();
    for (const l of luoghi) {
      const s = l.primaApparizione ?? 0;
      if (!mappa.has(s)) {
        mappa.set(s, []);
      }
      mappa.get(s)!.push(l);
    }
    return [...mappa.entries()]
      .sort((a, b) => a[0] - b[0])
      .map(([sessione, gruppo]) => ({ sessione, luoghi: gruppo }));
  }
}
