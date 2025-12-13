import { Observable } from 'rxjs';
import { AuthUser, LoginRequest, RegisterRequest, UpdateProfileRequest } from './auth.model';

export abstract class AuthRepository {
  abstract register(req: RegisterRequest): Observable<AuthUser>;
  abstract login(req: LoginRequest): Observable<AuthUser>;
  abstract logout(): void;
  abstract getCurrentUser(): AuthUser | null;
  abstract isLoggedIn(): boolean;
  abstract deleteAccount(): Observable<boolean>;
  abstract updateProfile(req: UpdateProfileRequest): Observable<AuthUser>;
  abstract requestPasswordReset(email: string): Observable<void>;
}
