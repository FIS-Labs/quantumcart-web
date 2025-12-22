import { Component, inject, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { TranslationService } from '../../services/translation/translation.service';
import { AuthFacade } from '../../../features/auth/domain/auth.facade';
import { CartFacade } from '../../../features/cart/domain/cart.facade';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLayoutComponent implements OnInit {
  translationService = inject(TranslationService);
  private authFacade = inject(AuthFacade);
  private cartFacade = inject(CartFacade);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  lang = 'en';

  cartCount$ = this.cartFacade.cartCount$;
  isLoggedIn$ = this.authFacade.currentUser$.pipe(map(user => !!user));

  ngOnInit() {
    this.translationService.lang$.subscribe((l) => {
      this.lang = l;
      this.cdr.markForCheck();
    });

    this.authFacade.currentUser$.subscribe(() => {
      this.cdr.markForCheck();
    });
  }

  changeLang(lang: string) {
    this.translationService.switchLang(lang as 'en' | 'de');
  }

  logout() {
    this.authFacade.logout();
    this.cartFacade.clear();
    this.router.navigate(['/']);
  }
}
