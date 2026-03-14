import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const adminGuard: CanMatchFn = (route, segments) => {
  const servicioAuth = inject(AuthService);
  const router = inject(Router);

  // Verificamos si el rol es ADMIN
  if (servicioAuth.rolActual() === 'ROLE_ADMIN') {
    return true;
  }

  return false;
};