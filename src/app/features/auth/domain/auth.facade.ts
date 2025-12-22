import { Injectable, inject } from '@angular/core';
import { AuthRepository } from './auth.repository';
import { LoginRequest, RegisterRequest, UpdateProfileRequest } from './auth.model';
import { CartFacade } from '../../cart/domain/cart.facade';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  private repo = inject(AuthRepository);
  private cartFacade = inject(CartFacade);

  currentUser$ = this.repo.currentUser$;



  register(req: RegisterRequest) {
    return this.repo.register(req);
  }

  login(req: LoginRequest) {
    return this.repo.login(req);
  }

  logout() {
    this.cartFacade.clear();
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
