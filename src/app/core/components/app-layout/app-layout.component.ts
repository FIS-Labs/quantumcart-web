import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { TranslationService } from '../../services/translation/translation.service';
import { AuthFacade } from '../../../features/auth/domain/auth.facade';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
})
export class AppLayoutComponent {
  /** Injected services */
  translationService = inject(TranslationService);
  private authFacade = inject(AuthFacade);
  private router = inject(Router);

  /** Local state */
  lang = 'en';

  ngOnInit() {
    this.translationService.lang$.subscribe((l) => (this.lang = l));
  }

  changeLang(lang: string) {
    this.translationService.switchLang(lang as 'en' | 'de');
  }

  logout() {
    this.authFacade.logout();
    this.router.navigate(['/auth/login']);
  }
}
