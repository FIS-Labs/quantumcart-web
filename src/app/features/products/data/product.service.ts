import { Injectable } from '@angular/core';
import { PaginatedProducts, Product } from '../domain/product.model';
import { PRODUCTS } from './mock-products.json';

@Injectable({ providedIn: 'root' })
export class ProductService {
  getAllPaged(page: number, pageSize: number): PaginatedProducts {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    return {
      items: PRODUCTS.slice(start, end),
      total: PRODUCTS.length,
      page,
      pageSize,
    };
  }

  getById(id: number): Product | undefined {
    return PRODUCTS.find((p) => p.id === id);
  }
}
