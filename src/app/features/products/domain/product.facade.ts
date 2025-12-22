import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, combineLatest, map, shareReplay, switchMap } from 'rxjs';
import { ProductRepository } from '../domain/product.repository';
import { Product } from '../domain/product.model';
import { TranslationService } from '../../../core/services/translation/translation.service';

@Injectable({ providedIn: 'root' })
export class ProductFacade {
  private repo = inject(ProductRepository);
  private translationService = inject(TranslationService);

  private refresh$ = new BehaviorSubject<void>(undefined);
  private page$ = new BehaviorSubject(1);
  private readonly PAGE_SIZE = 12;

  private rawAllProducts$ = this.refresh$.pipe(
    switchMap(() => this.repo.getAll()),
    shareReplay(1)
  );

  private rawPagedProducts$ = combineLatest([this.page$, this.refresh$]).pipe(
    switchMap(([page]) => this.repo.getAllPaged(page, this.PAGE_SIZE)),
    shareReplay(1)
  );

  allProducts$ = combineLatest([
    this.rawAllProducts$,
    this.translationService.lang$
  ]).pipe(
    map(([products, lang]) => products.map(p => this.mapTranslated(p, lang)))
  );

  products$ = combineLatest([
    this.rawPagedProducts$,
    this.translationService.lang$
  ]).pipe(
    map(([result, lang]) => ({
      ...result,
      items: result.items.map((p) => this.mapTranslated(p, lang)),
    })),
  );

  getPaged(page: number, size: number) {
    return this.repo.getAllPaged(page, size);
  }

  getAll() {
    return this.allProducts$;
  }

  getProductById(id: number) {
    return combineLatest([
      this.repo.getById(id),
      this.translationService.lang$
    ]).pipe(
      map(([p, lang]) => (p ? this.mapTranslated(p, lang) : undefined))
    );
  }

  nextPage() {
    this.page$.next(this.page$.value + 1);
  }

  previousPage() {
    if (this.page$.value > 1) {
      this.page$.next(this.page$.value - 1);
    }
  }

  refresh() {
    this.refresh$.next();
  }

  private mapTranslated(p: Product, lang: string): Product {
    return {
      ...p,
      category: lang === 'de' ? p.categoryDe : p.category,
      description: lang === 'de' ? p.descriptionDe : p.description,
    };
  }
}
