import { Component, NgZone, OnDestroy } from '@angular/core';
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
export class GalleriaPageComponent implements OnDestroy {
  vm$: Observable<ViewModel>;

  // ===== LIGHTBOX =====
  lightboxVisible = false;
  lightboxCards: CardGalleria[] = [];
  lightboxIndex = 0;

  get lightboxCard(): CardGalleria | null {
    return this.lightboxCards[this.lightboxIndex] ?? null;
  }

  private onKeyDown = (e: KeyboardEvent): void => {
    this.zone.run(() => {
      if (e.key === 'Escape')      this.chiudiLightbox();
      else if (e.key === 'ArrowLeft')  this.prev();
      else if (e.key === 'ArrowRight') this.next();
    });
  };

  constructor(private dati: CampagnaDataService, private zone: NgZone) {
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

  apriLightbox(cards: CardGalleria[], index: number): void {
    this.lightboxCards = cards;
    this.lightboxIndex = index;
    this.lightboxVisible = true;
    if (typeof window === 'undefined') return;
    window.addEventListener('keydown', this.onKeyDown);
  }

  chiudiLightbox(): void {
    this.lightboxVisible = false;
    if (typeof window === 'undefined') return;
    window.removeEventListener('keydown', this.onKeyDown);
  }

  prev(): void {
    this.lightboxIndex = (this.lightboxIndex - 1 + this.lightboxCards.length) % this.lightboxCards.length;
  }

  next(): void {
    this.lightboxIndex = (this.lightboxIndex + 1) % this.lightboxCards.length;
  }

  totale(gruppi: GruppoGalleria[]): number {
    return gruppi.reduce((acc, g) => acc + g.cards.length, 0);
  }

  scrollTo(event: Event, anchor: string): void {
    event.preventDefault();
    if (typeof window === 'undefined') return;
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  ngOnDestroy(): void {
    if (typeof window === 'undefined') return;
    window.removeEventListener('keydown', this.onKeyDown);
  }
}
