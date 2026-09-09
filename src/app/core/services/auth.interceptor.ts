import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { ApplicationRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, finalize, throwError } from 'rxjs';
import { AuthService } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const router = inject(Router);
  const authService = inject(AuthService);
  const appRef = inject(ApplicationRef);

  // localStorage non esiste lato server (SSR/prerender): senza questa guardia
  // l'interceptor lancia e ogni richiesta HTTP fallisce durante il render server.
  const token =
    typeof window === 'undefined'
      ? null
      : localStorage.getItem('token');

  const cloned = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return next(cloned).pipe(
    catchError((err: unknown) => {
      // Token scaduto/non valido: senza questo, la pagina resta silenziosamente
      // vuota finché l'utente non fa logout/login manuale per ottenere un token fresco.
      // Esclude /auth/login: lì un 401 significa "credenziali errate", gestito dal
      // componente di login stesso, non una sessione scaduta da ripulire.
      const isLoginRequest = req.url.includes('/auth/login');
      if (err instanceof HttpErrorResponse && err.status === 401 && !isLoginRequest && typeof window !== 'undefined') {
        authService.logout(router.url);
      }
      return throwError(() => err);
    }),
    // App zoneless: senza questo, i componenti che assegnano il risultato di
    // subscribe() a un campo normale (non signal) restano non ridisegnati
    // finché un altro evento (es. un click) non forza un nuovo giro di CD.
    finalize(() => appRef.tick())
  );
};
