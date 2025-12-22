import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
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
  currentUser$ = this.authService.currentUser$;

  register(req: RegisterRequest): Observable<AuthUser> {
    return this.authService.registerUser(req);
  }

  login(req: LoginRequest): Observable<AuthUser> {
    return this.authService.loginUser(req);
  }

  getCurrentUser(): AuthUser | null {
    return this.authService.currentUser();
  }

  fetchMe(): Observable<AuthUser> {
    return this.authService.getMe();
  }

  isLoggedIn(): boolean {
    return !!this.authService.currentUser();
  }

  logout(): void {
    this.authService.logout();
  }

  deleteAccount(): Observable<boolean> {
    return new Observable<boolean>((subscriber) => {
      this.authService.deleteAccount().subscribe({
        next: () => {
          subscriber.next(true);
          subscriber.complete();
        },
        error: (err) => subscriber.error(err)
      });
    });
  }

  updateProfile(req: UpdateProfileRequest): Observable<AuthUser> {
    return this.authService.updateUserProfile(req);
  }

  requestPasswordReset(email: string): Observable<void> {
    return this.authService.requestPasswordReset(email);
  }
}
