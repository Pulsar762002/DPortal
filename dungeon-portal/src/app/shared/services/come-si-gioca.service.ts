import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map, share, switchMap } from 'rxjs/operators';

import { CampagnaService } from './campagna.service';
import { ComeSiGiocaFile } from '../../core/models/come-si-gioca.model';

function shareLatest<T>() {
  return share<T>({
    connector: () => new ReplaySubject<T>(1),
    resetOnError: false,
    resetOnComplete: true,
    resetOnRefCountZero: true,
  });
}

/** Campagne create prima del modello Land (es. discesa-averno) non hanno LandId/landSlug in DB
 * ma il loro contenuto vive comunque sotto assets/data/ikaros/... per convenzione storica
 * (stesso fallback usato dalle altre pagine hardcoded di discesa-averno). */
const LEGACY_LAND_SLUG = 'ikaros';

/**
 * Carica il contenuto "Come si gioca" della campagna: risolve prima il
 * landSlug (es. "ikaros") dallo slug campagna via /api/campagne, poi
 * scarica assets/data/<landSlug>/campagne/<slug>/come-si-gioca.json.
 * Generico per qualunque campagna, non hardcoded come le altre pagine
 * di discesa-averno.
 */
@Injectable({ providedIn: 'root' })
export class ComeSiGiocaService {

  constructor(
    private http: HttpClient,
    private campagnaService: CampagnaService
  ) {}

  getContenuto(slug: string): Observable<ComeSiGiocaFile> {
    return this.campagnaService.getAll().pipe(
      map(campagne => campagne.find(c => c.slug === slug)),
      switchMap(campagna => {
        const landSlug = campagna?.landSlug || LEGACY_LAND_SLUG;
        return this.http.get<ComeSiGiocaFile>(
          `assets/data/${landSlug}/campagne/${slug}/come-si-gioca.json`
        );
      }),
      shareLatest()
    );
  }
}
