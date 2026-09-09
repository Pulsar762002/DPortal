import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Campagna } from '../../core/models/campagna.model';

@Injectable({
  providedIn: 'root'
})
export class CampagnaService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Campagna[]> {
    return this.http.get<Campagna[]>(`${this.apiUrl}/api/campagne`);
  }

  crea(campagna: {
    slug: string;
    nome: string;
    landId?: string;
    descrizione?: string;
    immagineUrl?: string;
    masterUserId?: string;
  }): Observable<{ slug: string; nome: string }> {
    return this.http.post<{ slug: string; nome: string }>(
      `${this.apiUrl}/api/campagne`,
      campagna
    );
  }

  aggiorna(slug: string, campagna: {
    nome?: string;
    descrizione?: string;
    immagineUrl?: string;
    landId?: string;
  }): Observable<{ slug: string; nome: string; descrizione?: string; immagineUrl?: string }> {
    return this.http.put<{ slug: string; nome: string; descrizione?: string; immagineUrl?: string }>(
      `${this.apiUrl}/api/campagne/${slug}`,
      campagna
    );
  }

  uploadImmagine(slug: string, file: File): Observable<{ url: string }> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<{ url: string }>(
      `${this.apiUrl}/api/campagne/${slug}/immagine`,
      formData
    );
  }

  elimina(slug: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/campagne/${slug}`);
  }
}
