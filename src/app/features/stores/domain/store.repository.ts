import { Observable } from 'rxjs';
import { Store } from './store.model';

export abstract class StoreRepository {
    abstract getStores(): Observable<Store[]>;
}
