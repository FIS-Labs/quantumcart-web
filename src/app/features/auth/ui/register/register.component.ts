import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { TranslationService } from './../../../../core/services/translation/translation.service';
import { AuthFacade } from '../../domain/auth.facade';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  translationService = inject(TranslationService);
  private authFacade = inject(AuthFacade);
  private router = inject(Router);

  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  phone = '';
  street = '';
  city = '';
  zip = '';
  country = '';

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      alert(this.translationService.t('passwordsDoNotMatch'));
      return;
    }

    this.authFacade
      .register({
        name: this.name,
        email: this.email,
        password: this.password,
      })
      .subscribe({
        next: () => this.router.navigate(['/auth/login']),
        error: (err) => {
          const errorKey = this.mapAuthError(err.message);
          alert(this.translationService.t(errorKey));
        },
      });
  }

  private mapAuthError(message: string): 'userAlreadyExists' | 'registrationError' {
    if (message.includes('already exists')) return 'userAlreadyExists';
    return 'registrationError';
  }
}
