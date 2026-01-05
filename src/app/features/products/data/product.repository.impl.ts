import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductRepository } from '../domain/product.repository';
import { PaginatedProducts, Product } from '../domain/product.model';
import { ProductService } from './product.service';

@Injectable()
export class ProductRepositoryImpl implements ProductRepository {
  private api = inject(ProductService);

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
    return this.api.getAllPaged(page, pageSize, filters);
  }

  getAll(): Observable<Product[]> {
    return this.api.getAll();
  }

  getById(id: number): Observable<Product | undefined> {
    return this.api.getById(id);
  }


}
