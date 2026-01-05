import { Observable } from 'rxjs';
import { PaginatedProducts, Product } from './product.model';

export abstract class ProductRepository {
  abstract getAllPaged(
    page: number,
    pageSize: number,
    filters?: {
      category?: string;
      minPrice?: number;
      maxPrice?: number;
      availability?: string;
    }
  ): Observable<PaginatedProducts>;
  abstract getAll(): Observable<Product[]>;
  abstract getById(id: number): Observable<Product | undefined>;

}
