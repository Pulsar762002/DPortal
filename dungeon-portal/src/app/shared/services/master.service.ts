import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Master } from '../../core/models/master.model';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Master[]> {
    return this.http.get<Master[]>(`${this.apiUrl}/api/users/masters`);
  }
}
