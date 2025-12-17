import { Injectable, inject } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { AuthRepository } from '../domain/auth.repository';
import { AuthService } from './auth.service';
import {
  AuthUser,
  LoginRequest,
  RegisterRequest,
  UpdateProfileRequest,
} from '../domain/auth.model';

@Injectable()
export class AuthRepositoryImpl implements AuthRepository {
  private authService = inject(AuthService);

  register(req: RegisterRequest): Observable<AuthUser> {
    try {
      return of(this.authService.registerUser(req));
    } catch (err: unknown) {
      return throwError(() => err);
    }
  }

  login(req: LoginRequest): Observable<AuthUser> {
    try {
      return of(this.authService.loginUser(req));
    } catch (err: unknown) {
      return throwError(() => err);
    }
  }

  getCurrentUser(): AuthUser | null {
    return this.authService.currentUser();
  }

  isLoggedIn(): boolean {
    return !!this.authService.currentUser();
  }

  logout(): void {
    this.authService.logout();
  }

  deleteAccount(): Observable<boolean> {
    try {
      return of(this.authService.deleteAccount());
    } catch (err: unknown) {
      return throwError(() => err);
    }
  }

  updateProfile(req: UpdateProfileRequest): Observable<AuthUser> {
    try {
      return of(this.authService.updateUserProfile(req));
    } catch (err: unknown) {
      return throwError(() => err);
    }
  }

  requestPasswordReset(email: string): Observable<void> {
    try {
      this.authService.requestPasswordReset(email);
      return of(void 0);
    } catch (err: unknown) {
      return throwError(() => err);
    }
  }
}
