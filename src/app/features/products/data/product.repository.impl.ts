import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductRepository } from '../domain/product.repository';
import { PaginatedProducts, Product } from '../domain/product.model';
import { ProductService } from './product.service';

@Injectable()
export class ProductRepositoryImpl implements ProductRepository {
  private api = inject(ProductService);

  getAllPaged(page: number, pageSize: number): Observable<PaginatedProducts> {
    return of(this.api.getAllPaged(page, pageSize));
  }

  getAll(): Observable<Product[]> {
    return of(this.api.getAll());
  }

  getById(id: number): Observable<Product | undefined> {
    return of(this.api.getById(id));
  }
}
