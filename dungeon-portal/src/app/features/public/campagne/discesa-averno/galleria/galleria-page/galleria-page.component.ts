import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CampagnaDataService } from '../../campagna-data.service';

interface CardGalleria {
  nome: string;
  immagine: string;
  sottotitolo?: string;
  stato?: string;
}

interface GruppoGalleria {
  titolo: string;
  anchor: string;
  cards: CardGalleria[];
}

interface ViewModel {
  gruppi: GruppoGalleria[];
}

const CATEGORIE: Record<string, { titolo: string; anchor: string; ordine: number }> = {
  party:      { titolo: 'Party',      anchor: 'party',      ordine: 0 },
  alleato:    { titolo: 'Alleati',    anchor: 'alleati',    ordine: 1 },
  secondario: { titolo: 'Secondari', anchor: 'secondari',  ordine: 2 },
  avversario: { titolo: 'Avversari', anchor: 'avversari',  ordine: 3 },
};

@Component({
  selector: 'app-galleria-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galleria-page.component.html',
  styleUrl: './galleria-page.component.css',
})
export class GalleriaPageComponent {
  vm$: Observable<ViewModel>;

  constructor(private dati: CampagnaDataService) {
    this.vm$ = combineLatest([
      this.dati.getPersonaggi(),
      this.dati.getLuoghi(),
    ]).pipe(
      map(([personaggi, luoghi]) => {
        const mappaCategorie = new Map<string, CardGalleria[]>();

        for (const p of personaggi) {
          if (!p.immagine) continue;
          if (!mappaCategorie.has(p.categoria)) mappaCategorie.set(p.categoria, []);
          mappaCategorie.get(p.categoria)!.push({
            nome: p.nome,
            immagine: p.immagine,
            sottotitolo: p.ruolo,
            stato: p.stato,
          });
        }

        const gruppiPersonaggi: GruppoGalleria[] = [...mappaCategorie.entries()]
          .sort((a, b) => (CATEGORIE[a[0]]?.ordine ?? 99) - (CATEGORIE[b[0]]?.ordine ?? 99))
          .map(([cat, cards]) => ({
            titolo: CATEGORIE[cat]?.titolo ?? cat,
            anchor: CATEGORIE[cat]?.anchor ?? cat,
            cards,
          }));

        const cardsLuoghi: CardGalleria[] = luoghi
          .filter(l => l.immagine)
          .map(l => ({
            nome: l.nome,
            immagine: l.immagine!,
            sottotitolo: l.tipo,
            stato: l.stato,
          }));

        const gruppi: GruppoGalleria[] = [
          ...gruppiPersonaggi,
          ...(cardsLuoghi.length ? [{ titolo: 'Luoghi', anchor: 'luoghi', cards: cardsLuoghi }] : []),
        ];

        return { gruppi };
      })
    );
  }

  totale(gruppi: GruppoGalleria[]): number {
    return gruppi.reduce((acc, g) => acc + g.cards.length, 0);
  }

  scrollTo(event: Event, anchor: string): void {
    event.preventDefault();
    if (typeof window === 'undefined') return;
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
