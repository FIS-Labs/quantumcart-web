import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { StoreFacade } from '../../domain/store.facade';
import { TranslationService } from '../../../../core/services/translation/translation.service';

@Component({
    selector: 'app-stores-page',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './stores-page.component.html',
    styleUrls: ['./stores-page.component.scss'],
})
export class StoresPageComponent {
    private facade = inject(StoreFacade);
    private sanitizer = inject(DomSanitizer);
    translationService = inject(TranslationService);

    stores$ = this.facade.stores$;

    getMapUrl(address: string, city: string): SafeResourceUrl {
        const query = encodeURIComponent(`${address}, ${city}`);
        const url = `https://maps.google.com/maps?q=${query}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
