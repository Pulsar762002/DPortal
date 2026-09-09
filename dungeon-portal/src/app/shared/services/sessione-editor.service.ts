import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { CampaignChapter, CampaignSession, SessioneMeta } from '../models/campaign-session.model';

@Injectable({
  providedIn: 'root'
})
export class SessioneEditorService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getVociElenco(campagna: string): Observable<SessioneMeta[]> {
    return this.http.get<SessioneMeta[]>(`${this.apiUrl}/api/sessioni/${campagna}/elenco/voci`);
  }

  creaSessione(campagna: string, label: string): Observable<SessioneMeta> {
    return this.http.post<SessioneMeta>(
      `${this.apiUrl}/api/sessioni/${campagna}/elenco/voci`,
      { label }
    );
  }

  aggiornaVoceElenco(campagna: string, sessionNumber: number, label: string, visible: boolean): Observable<void> {
    return this.http.put<void>(
      `${this.apiUrl}/api/sessioni/${campagna}/elenco/voci/${sessionNumber}`,
      { label, visible }
    );
  }

  eliminaSessione(campagna: string, sessionNumber: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/sessioni/${campagna}/elenco/voci/${sessionNumber}`);
  }

  getSessione(campagna: string, sessionNumber: number): Observable<CampaignSession> {
    return this.http.get<CampaignSession>(`${this.apiUrl}/api/sessioni/${campagna}/${sessionNumber}`);
  }

  aggiornaSessione(
    campagna: string,
    sessionNumber: number,
    title: string,
    videoId: string | undefined,
    chapters: CampaignChapter[]
  ): Observable<void> {
    return this.http.put<void>(
      `${this.apiUrl}/api/sessioni/${campagna}/${sessionNumber}`,
      { title, videoId, chapters }
    );
  }

  uploadImmagine(campagna: string, file: File): Observable<{ url: string }> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<{ url: string }>(
      `${this.apiUrl}/api/sessioni/${campagna}/immagini`,
      formData
    );
  }
}
