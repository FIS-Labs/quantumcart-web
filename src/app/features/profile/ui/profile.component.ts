import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
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
  private cdr = inject(ChangeDetectorRef);

  user: AuthUser | null = null;
  editMode = false;


  editName = '';
  editEmail = '';
  editPhone = '';
  editAdditionalNotes = '';
  editStreet = '';
  editCity = '';
  editPostalCode = '';
  editCountry = '';



  ngOnInit(): void {
    this.authFacade.currentUser$.subscribe((user) => {
      this.user = user;
      if (!user) {
        this.router.navigate(['/auth/login']);
      }
      this.cdr.markForCheck();
    });
  }

  toggleEditMode() {
    if (!this.user) return;

    this.editMode = !this.editMode;

    if (this.editMode) {
      this.editName = this.user.name;
      this.editEmail = this.user.email;
      this.editPhone = this.user.phone || '';
      this.editAdditionalNotes = this.user.additionalNotes || '';
      this.editStreet = this.user.street || '';
      this.editCity = this.user.city || '';
      this.editPostalCode = this.user.postalCode || '';
      this.editCountry = this.user.country || '';
    }
  }

  cancelEdit() {
    this.editMode = false;
  }

  saveProfile() {
    console.log('Saving profile...', {
      name: this.editName,
      email: this.editEmail,
      phone: this.editPhone,
      additionalNotes: this.editAdditionalNotes,
    });

    if (!this.editName || !this.editEmail) {
      alert(this.translationService.t('requiredField'));
      return;
    }

    this.authFacade
      .updateProfile({
        name: this.editName,
        email: this.editEmail,
        phone: this.editPhone || undefined,
        additionalNotes: this.editAdditionalNotes || undefined,
        street: this.editStreet || undefined,
        city: this.editCity || undefined,
        postalCode: this.editPostalCode || undefined,
        country: this.editCountry || undefined,
      })
      .subscribe({
        next: (updatedUser) => {
          console.log('Profile updated successfully', updatedUser);
          this.user = updatedUser;
          this.editMode = false;
          this.cdr.markForCheck();
          alert(this.translationService.t('profileUpdated'));
        },
        error: (err) => {
          console.error('Failed to update profile', err);
          alert('Failed to update profile');
        },
      });
  }

  logout() {
    this.authFacade.logout();
    this.router.navigate(['/auth/login']);
  }

  deleteAccount() {
    console.log('Delete account triggered');
    const confirmText =
      this.translationService.t('confirmDeleteAccount') ||
      'Are you sure you want to delete your account? This cannot be undone.';

    if (!window.confirm(confirmText)) {
      console.log('Delete account cancelled by user');
      return;
    }

    console.log('Deleting account...');
    this.authFacade.deleteAccount().subscribe({
      next: (ok) => {
        console.log('Account deleted status:', ok);
        if (ok) {
          this.router.navigate(['/auth/register']);
        } else {
          alert(this.translationService.t('couldNotDeleteAccount'));
        }
      },
      error: (err) => {
        console.error('Error deleting account:', err);
        alert(this.translationService.t('couldNotDeleteAccount'));
      },
    });
  }
}
