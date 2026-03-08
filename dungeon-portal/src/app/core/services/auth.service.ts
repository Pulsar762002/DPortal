import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;

  private authState = new BehaviorSubject<boolean>(this.hasToken());
  isAuthenticated$ = this.authState.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  register(data: FormData) {
    return this.http.post(`${this.apiUrl}/api/auth/register`, data);
  }

  private hasToken(): boolean {
    if (typeof window === 'undefined') {
      return false;
    }
    return !!localStorage.getItem('token');
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/api/auth/login`, { email, password })
      .pipe(
        tap(response => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.user));
          this.authState.next(true);
        })
      );
  }

  getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authState.next(false);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    if (typeof window === 'undefined') {
      return null;
    }
    return localStorage.getItem('token');
  }


}
