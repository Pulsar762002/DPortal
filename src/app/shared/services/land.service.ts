import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Land, LandDetail } from '../../core/models/land.model';

@Injectable({
  providedIn: 'root'
})
export class LandService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Land[]> {
    return this.http.get<Land[]>(`${this.apiUrl}/api/land`);
  }

  getBySlug(slug: string): Observable<LandDetail> {
    return this.http.get<LandDetail>(`${this.apiUrl}/api/land/${slug}`);
  }

  crea(land: { slug: string; nome: string; lore?: string }): Observable<Land> {
    return this.http.post<Land>(`${this.apiUrl}/api/land`, land);
  }

  aggiungiMaster(landId: string, userId: string, isPrincipale: boolean): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/api/land/${landId}/masters`, { userId, isPrincipale });
  }
}
