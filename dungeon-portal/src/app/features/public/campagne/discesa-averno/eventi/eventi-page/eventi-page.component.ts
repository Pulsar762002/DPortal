import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CampagnaDataService, Evento } from '../../campagna-data.service';

interface GruppoEventi {
  sessione: number;
  anchor: string;
  eventi: Evento[];
  espanso: boolean;
}

interface ViewModel {
  gruppi: GruppoEventi[];
  nomiPersonaggi: Map<string, string>;
}

@Component({
  selector: 'app-eventi-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventi-page.component.html',
  styleUrl: './eventi-page.component.css',
})
export class EventiPageComponent {
  vm$: Observable<ViewModel>;

  readonly tipoColori: Record<string, string> = {
    'dialogo':       '#60a5fa',
    'incontro':      '#4ade80',
    'viaggio':       '#9ca3af',
    'scoperta':      '#facc15',
    'combattimento': '#f87171',
    'flashback':     '#c084fc',
    'evento-chiave': '#f4a261',
  };

  constructor(private dati: CampagnaDataService) {
    this.vm$ = combineLatest([
      this.dati.getEventi(),
      this.dati.getPersonaggiNomeMap(),
    ]).pipe(
      map(([eventi, nomiPersonaggi]) => ({
        gruppi: this.raggruppa(eventi),
        nomiPersonaggi,
      }))
    );
  }

  totaleEventi(gruppi: GruppoEventi[]): number {
    return gruppi.reduce((s, g) => s + g.eventi.length, 0);
  }

  private raggruppa(eventi: Evento[]): GruppoEventi[] {
    const mappa = new Map<number, Evento[]>();
    for (const e of eventi) {
      if (!mappa.has(e.sessione)) mappa.set(e.sessione, []);
      mappa.get(e.sessione)!.push(e);
    }
    return [...mappa.entries()]
      .sort((a, b) => a[0] - b[0])
      .map(([sessione, evs], i) => ({
        sessione,
        anchor: `sessione-${sessione}`,
        eventi: evs.sort((a, b) => a.ordine - b.ordine),
        espanso: i === 0,
      }));
  }

  toggle(gruppo: GruppoEventi): void {
    gruppo.espanso = !gruppo.espanso;
  }

  scrollTo(event: MouseEvent, anchor: string): void {
    event.preventDefault();
    if (typeof document === 'undefined') return;
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  tipoColore(tipo: string): string {
    return this.tipoColori[tipo] ?? '#9ca3af';
  }

  nomePersonaggio(id: string, nomiMap: Map<string, string>): string {
    return nomiMap.get(id) ?? id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }

  nomiPartecipanti(ids: string[] | undefined, nomiMap: Map<string, string>): string {
    return (ids ?? []).map(id => this.nomePersonaggio(id, nomiMap)).join(' · ');
  }
}
