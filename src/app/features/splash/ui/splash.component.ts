import { Component, OnInit, inject } from '@angular/core';

import { Router } from '@angular/router';
import { AuthFacade } from '../../auth/domain/auth.facade';

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [],
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashScreenComponent implements OnInit {
  private router = inject(Router);
  private authFacade = inject(AuthFacade);

  showSplash = true;
  opacityChange = 1;

  ngOnInit(): void {
    setTimeout(() => {
      this.opacityChange = 0;

      setTimeout(() => {
        this.showSplash = false;

        // Always go to products (Home) for "Real Shop" feel
        this.router.navigate(['/products']);
      }, 600);
    }, 1500);
  }
}
