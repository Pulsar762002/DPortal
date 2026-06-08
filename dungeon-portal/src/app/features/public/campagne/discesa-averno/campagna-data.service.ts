import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

/** Categoria di un personaggio, rispecchia le cartelle personaggi/. */
export type CategoriaPersonaggio = 'party' | 'alleato' | 'avversario' | 'secondario';

/** Una scheda personaggio come nel file personaggi.json. */
export interface Personaggio {
  id: string;
  nome: string;
  categoria: CategoriaPersonaggio;
  ruolo?: string;
  razza?: string;
  eta?: string;
  immagine?: string | null;
  aspetto?: string;
  personalita?: string;
  background?: string;
  stato?: string;
  primaApparizione: number;
  apparizioni?: number[];
}

/** Un luogo come nel file luoghi.json. */
export interface Luogo {
  id: string;
  nome: string;
  tipo: string;
  luogoPadre?: string | null;
  regione?: string;
  immagine?: string | null;
  descrizione?: string;
  stato?: string;
  primaApparizione: number;
  apparizioni?: number[];
}

interface PersonaggiFile { personaggi: Personaggio[]; }
interface LuoghiFile { luoghi: Luogo[]; }

/** View-model per la card personaggio (input del componente esistente). */
export interface PersonaggioCardVM {
  nome: string;
  specieClasse: string;
  descrizione: string;
  ruolo: string;
  immagine: string | null;
}

const BASE = 'assets/data/ikaros/campagne/discesa-averno';

@Injectable({ providedIn: 'root' })
export class CampagnaDataService {

  private personaggi$?: Observable<Personaggio[]>;
  private luoghi$?: Observable<Luogo[]>;

  constructor(private http: HttpClient) {}

  /** Tutti i personaggi (cache condivisa). */
  getPersonaggi(): Observable<Personaggio[]> {
    if (!this.personaggi$) {
      this.personaggi$ = this.http
        .get<PersonaggiFile>(`${BASE}/personaggi.json`)
        .pipe(map(f => f.personaggi ?? []), shareReplay(1));
    }
    return this.personaggi$;
  }

  /** Personaggi di una categoria, già mappati a view-model per la card. */
  getCardsByCategoria(categoria: CategoriaPersonaggio): Observable<PersonaggioCardVM[]> {
    return this.getPersonaggi().pipe(
      map(lista =>
        lista
          .filter(p => p.categoria === categoria)
          .map(p => this.toCardVM(p))
      )
    );
  }

  private toCardVM(p: Personaggio): PersonaggioCardVM {
    return {
      nome: p.nome,
      specieClasse: [p.razza, p.eta && p.eta !== 'Ignota' ? `(${p.eta})` : null]
        .filter(Boolean)
        .join(' ') || '—',
      descrizione: (p.personalita || p.aspetto || p.background || '').trim() || '—',
      ruolo: p.ruolo || '—',
      immagine: p.immagine ?? null,
    };
  }

  /** Tutti i luoghi (cache condivisa). */
  getLuoghi(): Observable<Luogo[]> {
    if (!this.luoghi$) {
      this.luoghi$ = this.http
        .get<LuoghiFile>(`${BASE}/luoghi.json`)
        .pipe(map(f => f.luoghi ?? []), shareReplay(1));
    }
    return this.luoghi$;
  }
}
