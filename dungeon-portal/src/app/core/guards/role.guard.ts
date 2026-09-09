import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Role } from '../models/role.model';

export const roleGuard = (allowedRoles: Role[]): CanActivateFn => {
  return () => {

    const authService = inject(AuthService);
    const router = inject(Router);

    if (!authService.getUser()) {
      router.navigate(['/login']);
      return false;
    }

    if (!authService.hasRole(...allowedRoles)) {
      router.navigate(['/']);
      return false;
    }

    return true;
  };
};
