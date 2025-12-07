import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, map, switchMap } from 'rxjs';
import { ProductRepository } from '../domain/product.repository';
import { PaginatedProducts, Product } from '../domain/product.model';
import { TranslationService } from '../../../core/services/translation/translation.service';

@Injectable({ providedIn: 'root' })
export class ProductFacade {
  private repo = inject(ProductRepository);
  private translationService = inject(TranslationService);

  private page$ = new BehaviorSubject(1);
  private readonly PAGE_SIZE = 12;

  /** Raw paged fetch */
  getPaged(page: number, size: number) {
    return this.repo.getAllPaged(page, size);
  }

  /** Reactive paginated products with translation applied */
  products$ = this.page$.pipe(
    switchMap((page) => this.repo.getAllPaged(page, this.PAGE_SIZE)),
    map((result) => ({
      ...result,
      items: result.items.map((p) => this.mapTranslated(p)),
    })),
  );

  /** Load product by id + apply translation */
  getProductById(id: number) {
    return this.repo.getById(id).pipe(map((p) => (p ? this.mapTranslated(p) : undefined)));
  }

  /** Page navigation */
  nextPage() {
    this.page$.next(this.page$.value + 1);
  }

  previousPage() {
    if (this.page$.value > 1) {
      this.page$.next(this.page$.value - 1);
    }
  }

  /** Internal translation mapper */
  private mapTranslated(p: Product): Product {
    const lang = this.translationService.currentLang;

    return {
      ...p,
      category: lang === 'de' ? p.categoryDe : p.category,
      description: lang === 'de' ? p.descriptionDe : p.description,
    };
  }
}
