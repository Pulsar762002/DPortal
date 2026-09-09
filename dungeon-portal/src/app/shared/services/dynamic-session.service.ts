import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import {
    CampaignSession
} from '../models/campaign-session.model';

@Injectable({
    providedIn: 'root'
})
export class DynamicSessionService {

    constructor(
        private http: HttpClient
    ) {}

    getSession(
        campaignSlug: string,
        sessionId: string
    ): Observable<CampaignSession> {

        const path =
            `${environment.apiUrl}/api/sessioni/${campaignSlug}/${sessionId}`;

        return this.http.get<CampaignSession>(path);
    }
}