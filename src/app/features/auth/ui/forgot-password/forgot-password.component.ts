import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { TranslationService } from '../../../../core/services/translation/translation.service';
import { AuthFacade } from '../../domain/auth.facade';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  email = '';
  submitted = false;
  success = false;
  errorMessage = '';

  private authFacade = inject(AuthFacade);
  private router = inject(Router);
  public translationService = inject(TranslationService);
  private location = inject(Location);

  goBack() {
    this.location.back();
  }

  resetPassword() {
    this.submitted = true;
    this.success = false;
    this.errorMessage = '';

    if (!this.email) {
      return;
    }

    this.authFacade.requestPasswordReset(this.email).subscribe({
      next: () => {
        this.success = true;
        this.email = '';
        this.submitted = false;
      },
      error: (err: unknown) => {
        this.errorMessage = (err as Error).message || this.translationService.t('emailNotFound');
        this.submitted = false;
      },
    });
  }
}
