import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthFacade } from '../../auth/domain/auth.facade';

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashScreenComponent implements OnInit {
  /** Injected services */
  private router = inject(Router);
  private authFacade = inject(AuthFacade);

  /** UI state */
  showSplash = true;
  opacityChange = 1;

  ngOnInit(): void {
    setTimeout(() => {
      this.opacityChange = 0;

      setTimeout(() => {
        this.showSplash = false;

        const isLogged = this.authFacade.isLoggedIn();
        this.router.navigate([isLogged ? '/products' : '/auth/login']);
      }, 600);
    }, 1500);
  }
}
