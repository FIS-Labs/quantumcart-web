import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, map, BehaviorSubject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AuthUser, LoginRequest, RegisterRequest, UpdateProfileRequest } from '../domain/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/auth`;
  private readonly USER_KEY = 'qc_user';
  private readonly TOKEN_KEY = 'qc_token';

  private userSubject = new BehaviorSubject<AuthUser | null>(this.getStoredUser());
  public currentUser$ = this.userSubject.asObservable();

  registerUser(data: RegisterRequest): Observable<AuthUser> {
    return this.http.post<AuthUser>(`${this.baseUrl}/register`, data).pipe(
      tap((user) => this.saveUser(user))
    );
  }

  loginUser(data: LoginRequest): Observable<AuthUser> {
    return this.http.post<{ token: string; user: AuthUser }>(`${this.baseUrl}/login`, data).pipe(
      tap((res) => {
        localStorage.setItem(this.TOKEN_KEY, res.token);
        this.saveUser(res.user);
      }),
      map((res) => res.user)
    );
  }

  logout() {
    this.http.post(`${this.baseUrl}/logout`, {}).subscribe();
    localStorage.removeItem(this.USER_KEY);
    localStorage.removeItem(this.TOKEN_KEY);
    this.userSubject.next(null);
  }

  currentUser(): AuthUser | null {
    return this.userSubject.value;
  }

  getMe(): Observable<AuthUser> {
    return this.http.get<AuthUser>(`${this.baseUrl}/me`).pipe(
      tap((user) => this.saveUser(user))
    );
  }

  deleteAccount(): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/me`).pipe(
      tap(() => this.logout())
    );
  }

  updateUserProfile(data: UpdateProfileRequest): Observable<AuthUser> {
    return this.http.put<AuthUser>(`${this.baseUrl}/me`, data).pipe(
      tap((user) => this.saveUser(user))
    );
  }

  requestPasswordReset(email: string): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/forgot-password`, { email });
  }

  private saveUser(user: AuthUser) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    this.userSubject.next(user);
  }

  private getStoredUser(): AuthUser | null {
    const raw = localStorage.getItem(this.USER_KEY);
    return raw ? JSON.parse(raw) : null;
  }
}
