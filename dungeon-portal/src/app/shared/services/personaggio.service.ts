import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Personaggio, PersonaggioInput } from '../../core/models/personaggio.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaggioService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMiei(): Observable<Personaggio[]> {
    return this.http.get<Personaggio[]>(`${this.apiUrl}/api/personaggi/miei`);
  }

  /** Campagne a cui l'utente corrente può assegnare i propri personaggi. */
  getCampagneDisponibili(): Observable<{ slug: string; nome: string }[]> {
    return this.http.get<{ slug: string; nome: string }[]>(`${this.apiUrl}/api/personaggi/miei/campagne`);
  }

  getByCampagna(slug: string): Observable<Personaggio[]> {
    return this.http.get<Personaggio[]>(`${this.apiUrl}/api/campagne/${slug}/personaggi`);
  }

  crea(dati: PersonaggioInput, avatar?: File | null): Observable<Personaggio> {
    return this.http.post<Personaggio>(`${this.apiUrl}/api/personaggi`, this.toFormData(dati, avatar));
  }

  aggiorna(id: string, dati: PersonaggioInput, avatar?: File | null): Observable<Personaggio> {
    return this.http.put<Personaggio>(`${this.apiUrl}/api/personaggi/${id}`, this.toFormData(dati, avatar));
  }

  elimina(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/personaggi/${id}`);
  }

  avatarSrc(p: Personaggio): string {
    return p.avatarUrl
      ? `${this.apiUrl}/uploads/${p.avatarUrl}`
      : 'assets/data/ikaros/campagne/discesa-averno/default-avatar.png';
  }

  private toFormData(dati: PersonaggioInput, avatar?: File | null): FormData {
    const formData = new FormData();
    formData.append('nome', dati.nome);
    formData.append('classe', dati.classe ?? '');
    formData.append('razza', dati.razza ?? '');
    formData.append('livello', dati.livello != null ? String(dati.livello) : '');
    formData.append('descrizione', dati.descrizione ?? '');
    formData.append('campagnaSlug', dati.campagnaSlug ?? '');
    if (dati.userId) {
      formData.append('userId', dati.userId);
    }
    if (avatar) {
      formData.append('avatar', avatar);
    }
    return formData;
  }
}
