import { Injectable, inject } from '@angular/core';
import { StoreRepository } from './store.repository';
import { TranslationService } from '../../../core/services/translation/translation.service';
import { combineLatest, map, shareReplay } from 'rxjs';
import { Store } from './store.model';

@Injectable({ providedIn: 'root' })
export class StoreFacade {
    private repo = inject(StoreRepository);
    private translationService = inject(TranslationService);

    private rawStores$ = this.repo.getStores().pipe(shareReplay(1));

    stores$ = combineLatest([
        this.rawStores$,
        this.translationService.lang$
    ]).pipe(
        map(([stores, lang]) => stores.map(s => this.mapTranslated(s, lang)))
    );

    private mapTranslated(s: Store, lang: string): Store {
        return {
            ...s,
            openingHours: lang === 'de' ? (s.openingHoursDe || s.openingHours) : s.openingHours
        };
    }
}
