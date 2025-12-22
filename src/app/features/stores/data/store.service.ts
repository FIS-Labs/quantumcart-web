import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Store } from '../domain/store.model';

@Injectable({ providedIn: 'root' })
export class StoreService {
    private http = inject(HttpClient);
    private readonly baseUrl = `${environment.apiUrl}/api/stores`;

    getStores(): Observable<Store[]> {
        return this.http.get<Store[]>(this.baseUrl);
    }

    getById(id: number): Observable<Store> {
        return this.http.get<Store>(`${this.baseUrl}/${id}`);
    }
}
