import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService) { }

  canActivate() {
    if (localStorage.getItem('jwt_token') &&
      !this.authService.isTokenExpired(this.authService.getToken())) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}