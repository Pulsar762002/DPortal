import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  // localStorage non esiste lato server (SSR/prerender): senza questa guardia
  // l'interceptor lancia e ogni richiesta HTTP fallisce durante il render server.
  const token =
    typeof window === 'undefined'
      ? null
      : localStorage.getItem('token');

  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next(cloned);
  }

  return next(req);
};
