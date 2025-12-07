import { Injectable } from '@angular/core';
import { AuthRepository } from './auth.repository';
import { LoginRequest, RegisterRequest } from './auth.model';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  constructor(private repo: AuthRepository) {}

  register(req: RegisterRequest) {
    return this.repo.register(req);
  }

  login(req: LoginRequest) {
    return this.repo.login(req);
  }

  logout() {
    return this.repo.logout();
  }

  currentUser() {
    return this.repo.getCurrentUser();
  }

  isLoggedIn() {
    return this.repo.isLoggedIn();
  }
}
