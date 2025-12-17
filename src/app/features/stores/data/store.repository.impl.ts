import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StoreRepository } from '../domain/store.repository';
import { Store } from '../domain/store.model';
import { StoreService } from './store.service';

@Injectable()
export class StoreRepositoryImpl implements StoreRepository {
    private service = inject(StoreService);

    getStores(): Observable<Store[]> {
        return of(this.service.getStores());
    }
}
