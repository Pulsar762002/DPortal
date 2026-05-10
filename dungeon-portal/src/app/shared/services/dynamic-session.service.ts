import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

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
            `assets/data/ikaros/campagne/${campaignSlug}/sessioni/session-${sessionId}.json`;

        return this.http.get<CampaignSession>(path);
    }
}