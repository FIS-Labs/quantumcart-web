import { Injectable } from '@angular/core';
import { Store } from '../domain/store.model';
import { MOCK_STORES } from './mock-stores.json';

@Injectable({ providedIn: 'root' })
export class StoreService {
    getStores(): Store[] {
        return MOCK_STORES;
    }
}
