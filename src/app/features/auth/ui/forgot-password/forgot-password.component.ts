import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { TranslationService } from '../../../../core/services/translation/translation.service';
import { AuthFacade } from '../../domain/auth.facade';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  email = '';
  submitted = false;
  success = false;
  errorMessage = '';

  constructor(
    private authFacade: AuthFacade,
    private router: Router,
    public translationService: TranslationService,
  ) {}

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
      error: (err: any) => {
        this.errorMessage = err.message || this.translationService.t('emailNotFound');
        this.submitted = false;
      },
    });
  }
}
