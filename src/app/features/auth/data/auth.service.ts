import { Injectable } from '@angular/core';
import { MOCK_USERS } from './mock-users.json';
import { AuthUser } from '../domain/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private CURRENT_KEY = 'qc_user';

  registerUser(data: { name: string; email: string; password: string }): AuthUser {
    const exists = MOCK_USERS.find((u) => u.email === data.email);

    if (exists) throw new Error('User already exists.');

    const newUser = {
      id: Date.now(),
      name: data.name,
      email: data.email,
      password: data.password,
      createdAt: new Date().toISOString(),
    };

    MOCK_USERS.push(newUser);
    localStorage.setItem(this.CURRENT_KEY, JSON.stringify(newUser));

    return this.toAuthUser(newUser);
  }

  loginUser(data: { email: string; password: string }): AuthUser {
    const user = MOCK_USERS.find((u) => u.email === data.email);

    if (!user) throw new Error('User not found.');
    if (user.password !== data.password) throw new Error('Invalid password.');

    localStorage.setItem(this.CURRENT_KEY, JSON.stringify(user));

    return this.toAuthUser(user);
  }

  logout() {
    localStorage.removeItem(this.CURRENT_KEY);
  }

  currentUser(): AuthUser | null {
    const raw = localStorage.getItem(this.CURRENT_KEY);
    return raw ? this.toAuthUser(JSON.parse(raw)) : null;
  }

  private toAuthUser(u: any): AuthUser {
    return {
      id: u.id,
      name: u.name,
      email: u.email,
      createdAt: u.createdAt,
    };
  }
}
