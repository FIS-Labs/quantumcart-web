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
      phone: undefined,
      address: undefined,
      createdAt: new Date().toISOString(),
    };

    MOCK_USERS.push(newUser as unknown as typeof MOCK_USERS[0]);
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

  deleteAccount(): boolean {
    const raw = localStorage.getItem(this.CURRENT_KEY);
    if (!raw) {
      return false;
    }

    const current = JSON.parse(raw);

    const index = MOCK_USERS.findIndex((u) => u.id === current.id || u.email === current.email);

    if (index !== -1) {
      MOCK_USERS.splice(index, 1);
    }

    this.logout();
    return true;
  }

  updateUserProfile(data: {
    name: string;
    email: string;
    phone?: string;
    address?: string;
  }): AuthUser {
    const raw = localStorage.getItem(this.CURRENT_KEY);
    if (!raw) {
      throw new Error('No user logged in');
    }

    const current = JSON.parse(raw);
    const userIndex = MOCK_USERS.findIndex((u) => u.id === current.id);

    if (userIndex === -1) {
      throw new Error('User not found');
    }

    // Update user in mock data
    MOCK_USERS[userIndex] = {
      ...MOCK_USERS[userIndex],
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      address: data.address || '',
    };

    // Update localStorage
    const updatedUser = MOCK_USERS[userIndex];
    localStorage.setItem(this.CURRENT_KEY, JSON.stringify(updatedUser));

    return this.toAuthUser(updatedUser);
  }

  private toAuthUser(u: unknown): AuthUser {
    const user = u as AuthUser;
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
      createdAt: user.createdAt,
    };
  }

  requestPasswordReset(email: string): boolean {
    const user = MOCK_USERS.find((u) => u.email === email);

    if (!user) {
      throw new Error('User not found');
    }

    // In mock mode, we just check if user exists
    // In production, this would send an email
    return true;
  }
}
