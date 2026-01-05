import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { PaginatedProducts, Product, Review } from '../domain/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/api/products`;

  getAllPaged(
    page: number,
    pageSize: number,
    filters?: {
      category?: string;
      minPrice?: number;
      maxPrice?: number;
      availability?: string;
    }
  ): Observable<PaginatedProducts> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    if (filters) {
      if (filters.category) params = params.set('category', filters.category);
      if (filters.minPrice) params = params.set('minPrice', filters.minPrice.toString());
      if (filters.maxPrice) params = params.set('maxPrice', filters.maxPrice.toString());
      if (filters.availability) params = params.set('availability', filters.availability);
    }

    return this.http.get<PaginatedProducts>(this.baseUrl, { params });
  }

  getAll(): Observable<Product[]> {
    return this.getAllPaged(1, 100).pipe(
      map((res: PaginatedProducts) => res.items)
    );
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  getReviews(productId: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.baseUrl}/${productId}/reviews`);
  }


}
