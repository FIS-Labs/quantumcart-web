import { Injectable, inject } from '@angular/core';
import { StoreRepository } from './store.repository';

@Injectable({ providedIn: 'root' })
export class StoreFacade {
    private repo = inject(StoreRepository);

    stores$ = this.repo.getStores();
}
