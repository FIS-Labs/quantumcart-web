import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-splash',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './splash.component.html',
    styleUrls: ['./splash.component.scss']
})
export class SplashScreenComponent implements OnInit {
    showSplash = true;
    opacityChange = 1;

    constructor(private router: Router) { }

    ngOnInit(): void {
        setTimeout(() => {
            this.opacityChange = 0;

            setTimeout(() => {
                this.showSplash = false;
                this.router.navigate(['/auth/login']);
            }, 1000);

        }, 3000);
    }
}
