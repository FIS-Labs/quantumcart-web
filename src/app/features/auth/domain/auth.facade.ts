import { Injectable } from '@angular/core';
import { AuthRepository } from './auth.repository';
import { LoginRequest, RegisterRequest, UpdateProfileRequest } from './auth.model';

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

  deleteAccount() {
    return this.repo.deleteAccount();
  }

  updateProfile(req: UpdateProfileRequest) {
    return this.repo.updateProfile(req);
  }

  requestPasswordReset(email: string) {
    return this.repo.requestPasswordReset(email);
  }
}
