import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TranslationService } from '../../../core/services/translation/translation.service';
import { AuthUser } from '../../auth/domain/auth.model';
import { AuthFacade } from '../../auth/domain/auth.facade';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  private authFacade = inject(AuthFacade);
  router = inject(Router);
  translationService = inject(TranslationService);

  user: AuthUser | null = null;
  editMode = false;


  editName = '';
  editEmail = '';
  editPhone = '';
  editAddress = '';



  ngOnInit(): void {
    this.user = this.authFacade.currentUser();

    if (!this.user) {
      this.router.navigate(['/auth/login']);
    }
  }

  toggleEditMode() {
    if (!this.user) return;

    this.editMode = !this.editMode;

    if (this.editMode) {
      this.editName = this.user.name;
      this.editEmail = this.user.email;
      this.editPhone = this.user.phone || '';
      this.editAddress = this.user.address || '';
    }
  }

  cancelEdit() {
    this.editMode = false;
  }

  saveProfile() {
    if (!this.editName || !this.editEmail) {
      alert(this.translationService.t('requiredField'));
      return;
    }

    this.authFacade
      .updateProfile({
        name: this.editName,
        email: this.editEmail,
        phone: this.editPhone || undefined,
        address: this.editAddress || undefined,
      })
      .subscribe({
        next: (updatedUser) => {
          this.user = updatedUser;
          this.editMode = false;
          alert(this.translationService.t('profileUpdated'));
        },
        error: (err) => {
          console.error(err);
          alert('Failed to update profile');
        },
      });
  }

  logout() {
    this.authFacade.logout();
    this.router.navigate(['/auth/login']);
  }

  deleteAccount() {
    const confirmText =
      this.translationService.t('confirmDeleteAccount') ||
      'Are you sure you want to delete your account? This cannot be undone.';

    if (!confirm(confirmText)) return;

    this.authFacade.deleteAccount().subscribe({
      next: (ok) => {
        if (ok) {
          this.router.navigate(['/auth/register']);
        } else {
          alert(this.translationService.t('couldNotDeleteAccount'));
        }
      },
      error: (err) => {
        console.error(err);
        alert(this.translationService.t('couldNotDeleteAccount'));
      },
    });
  }
}
