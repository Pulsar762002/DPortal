import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

/** Categoria di un personaggio, rispecchia le cartelle personaggi/. */
export type CategoriaPersonaggio = 'party' | 'alleato' | 'avversario' | 'secondario';

/** Un legame fra personaggi (campo correlazioni in personaggi.json). */
export interface Correlazione {
  personaggio: string;
  tipo: string;
  descrizione: string;
}

/** Una nota di sessione associata a un personaggio o luogo. */
export interface NotaSessione {
  sessione: number;
  testo: string;
}

/** @deprecated usa NotaSessione */
export type NotaPersonaggio = NotaSessione;

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
  correlazioni?: Correlazione[];
  note?: NotaSessione[];
  misteri?: string[];
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
  abitantiNotabili?: string[];
  note?: NotaSessione[];
  misteri?: string[];
}

/** Un evento come nel file eventi.json. */
export interface Evento {
  id: string;
  sessione: number;
  ordine: number;
  capitolo?: string;
  titolo: string;
  cosaSuccede: string;
  partecipanti?: string[];
  altriPartecipanti?: string[];
  luogo?: string;
  quando?: string;
  tipo: string;
  conseguenze?: string;
  note?: string;
}

interface PersonaggiFile { personaggi: Personaggio[]; }
interface LuoghiFile    { luoghi: Luogo[]; }
interface EventiFile    { eventi: Evento[]; }

/** View-model per la card personaggio (mantenuto per retrocompatibilità). */
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
  private eventi$?: Observable<Evento[]>;

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

  /** Mappa id → nome per tutti i personaggi. */
  getPersonaggiNomeMap(): Observable<Map<string, string>> {
    return this.getPersonaggi().pipe(
      map(lista => new Map(lista.map(p => [p.id, p.nome])))
    );
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

  /** Tutti gli eventi (cache condivisa). */
  getEventi(): Observable<Evento[]> {
    if (!this.eventi$) {
      this.eventi$ = this.http
        .get<EventiFile>(`${BASE}/eventi.json`)
        .pipe(map(f => f.eventi ?? []), shareReplay(1));
    }
    return this.eventi$;
  }
}
