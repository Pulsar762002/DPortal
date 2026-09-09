import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import {
  ComeSiGiocaArgomento,
  ComeSiGiocaCategoria,
  ComeSiGiocaIndice
} from '../../core/models/come-si-gioca.model';

import { StoryBlock } from '../../core/models/story-block.model';

/**
 * Contenuto "Come si gioca" della campagna: letto/scritto dall'API
 * (content/come-si-gioca/{campagna}/ sul server), non più da un JSON
 * statico nel bundle Angular — stesso pattern di ArchivioService.
 */
@Injectable({ providedIn: 'root' })
export class ComeSiGiocaService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getIndice(campagna: string): Observable<ComeSiGiocaIndice> {
    return this.http.get<ComeSiGiocaIndice>(`${this.apiUrl}/api/come-si-gioca/${campagna}`);
  }

  getArgomento(campagna: string, argomentoId: string): Observable<ComeSiGiocaArgomento> {
    return this.http.get<ComeSiGiocaArgomento>(
      `${this.apiUrl}/api/come-si-gioca/${campagna}/argomenti/${argomentoId}`
    );
  }

  creaCategoria(campagna: string, titolo: string): Observable<ComeSiGiocaCategoria> {
    return this.http.post<ComeSiGiocaCategoria>(
      `${this.apiUrl}/api/come-si-gioca/${campagna}/categorie`,
      { titolo }
    );
  }

  rinominaCategoria(campagna: string, categoriaId: string, titolo: string): Observable<void> {
    return this.http.put<void>(
      `${this.apiUrl}/api/come-si-gioca/${campagna}/categorie/${categoriaId}`,
      { titolo }
    );
  }

  eliminaCategoria(campagna: string, categoriaId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/come-si-gioca/${campagna}/categorie/${categoriaId}`);
  }

  creaArgomento(campagna: string, titolo: string, categoriaId: string): Observable<ComeSiGiocaArgomento> {
    return this.http.post<ComeSiGiocaArgomento>(
      `${this.apiUrl}/api/come-si-gioca/${campagna}/argomenti`,
      { titolo, categoria: categoriaId }
    );
  }

  aggiornaArgomento(
    campagna: string,
    argomentoId: string,
    titolo: string,
    categoriaId: string,
    sommario: string | undefined,
    immagine: string,
    blocks: StoryBlock[]
  ): Observable<void> {
    return this.http.put<void>(
      `${this.apiUrl}/api/come-si-gioca/${campagna}/argomenti/${argomentoId}`,
      { titolo, categoria: categoriaId, sommario, immagine, blocks }
    );
  }

  eliminaArgomento(campagna: string, argomentoId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/come-si-gioca/${campagna}/argomenti/${argomentoId}`);
  }

  uploadImmagine(campagna: string, file: File): Observable<{ url: string }> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<{ url: string }>(
      `${this.apiUrl}/api/come-si-gioca/${campagna}/immagini`,
      formData
    );
  }
}
