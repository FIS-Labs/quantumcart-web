import { Component, inject } from '@angular/core';

import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { TranslationService } from './../../../../core/services/translation/translation.service';
import { AuthFacade } from '../../domain/auth.facade';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  translationService = inject(TranslationService);
  private authFacade = inject(AuthFacade);
  private router = inject(Router);

  email = '';
  password = '';

  onSubmit() {
    this.authFacade
      .login({
        email: this.email,
        password: this.password,
      })
      .subscribe({
        next: () => this.router.navigate(['/products']),
        error: (err) => {
          const errorKey = this.mapAuthError(err.message);
          alert(this.translationService.t(errorKey));
        },
      });
  }

  private mapAuthError(message: string): 'userNotFound' | 'invalidPassword' | 'loginError' {
    if (message.includes('not found')) return 'userNotFound';
    if (message.includes('Invalid password')) return 'invalidPassword';
    return 'loginError';
  }
}
