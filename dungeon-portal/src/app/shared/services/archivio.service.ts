import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import {
  ArchivioCartella,
  ArchivioIndice,
  ArchivioVoce
} from '../models/archivio.model';

import { StoryBlock } from '../../core/models/story-block.model';

@Injectable({
  providedIn: 'root'
})
export class ArchivioService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getIndice(campagna: string): Observable<ArchivioIndice> {
    return this.http.get<ArchivioIndice>(`${this.apiUrl}/api/archivi/${campagna}`);
  }

  getVoce(campagna: string, voceId: string): Observable<ArchivioVoce> {
    return this.http.get<ArchivioVoce>(`${this.apiUrl}/api/archivi/${campagna}/voci/${voceId}`);
  }

  creaCartella(
    campagna: string,
    nome: string,
    cartellaParentId?: string
  ): Observable<ArchivioCartella> {
    return this.http.post<ArchivioCartella>(
      `${this.apiUrl}/api/archivi/${campagna}/cartelle`,
      { nome, cartellaParentId: cartellaParentId ?? null }
    );
  }

  rinominaCartella(campagna: string, cartellaId: string, nome: string): Observable<void> {
    return this.http.put<void>(
      `${this.apiUrl}/api/archivi/${campagna}/cartelle/${cartellaId}`,
      { nome }
    );
  }

  eliminaCartella(campagna: string, cartellaId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/archivi/${campagna}/cartelle/${cartellaId}`);
  }

  creaVoce(
    campagna: string,
    cartellaId: string,
    titolo: string,
    blocks: StoryBlock[] = []
  ): Observable<ArchivioVoce> {
    return this.http.post<ArchivioVoce>(
      `${this.apiUrl}/api/archivi/${campagna}/cartelle/${cartellaId}/voci`,
      { titolo, blocks }
    );
  }

  aggiornaVoce(
    campagna: string,
    voceId: string,
    titolo: string,
    blocks: StoryBlock[]
  ): Observable<void> {
    return this.http.put<void>(
      `${this.apiUrl}/api/archivi/${campagna}/voci/${voceId}`,
      { titolo, blocks }
    );
  }

  eliminaVoce(campagna: string, voceId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/archivi/${campagna}/voci/${voceId}`);
  }

  uploadImmagine(campagna: string, file: File): Observable<{ url: string }> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<{ url: string }>(
      `${this.apiUrl}/api/archivi/${campagna}/immagini`,
      formData
    );
  }
}
