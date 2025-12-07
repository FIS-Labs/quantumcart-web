import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { TranslationService } from '../../../../core/services/translation/translation.service';
import { Product } from '../../domain/product.model';

import { ProductCardComponent } from '../components/product-card/product-card.component';
import { ProductFacade } from '../../domain/product.facade';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSelectModule, MatFormFieldModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  /** Injected services */
  translationService = inject(TranslationService);
  private facade = inject(ProductFacade);
  private router = inject(Router);

  /** Data */
  displayedProducts: Product[] = [];
  rawProducts: Product[] = [];

  total = 0;
  page = 1;
  pageSize = 12;
  totalPages = 1;

  categories: string[] = [];
  selectedCategory: string = 'all';
  sortOption = 'priceAsc';

  ngOnInit() {
    this.loadData();

    this.translationService.lang$.subscribe(() => {
      this.loadData();
    });
  }

  /** Load paged products */
  loadData() {
    this.facade.getPaged(this.page, this.pageSize).subscribe((result) => {
      this.rawProducts = result.items;
      this.total = result.total;
      this.totalPages = Math.ceil(this.total / this.pageSize);

      this.populateCategories();
      this.applyFilters();
    });
  }

  /** Build dynamic category list */
  populateCategories() {
    const lang = this.translationService.currentLang;

    this.categories = [
      ...new Set(this.rawProducts.map((p) => (lang === 'en' ? p.category : p.categoryDe))),
    ];
  }

  /** Apply category filter */
  applyFilters() {
    const lang = this.translationService.currentLang;

    let filtered =
      this.selectedCategory === 'all'
        ? [...this.rawProducts]
        : this.rawProducts.filter(
            (p) => (lang === 'en' ? p.category : p.categoryDe) === this.selectedCategory,
          );

    this.displayedProducts = filtered;
    this.applySorting();
  }

  /** Apply sorting */
  applySorting() {
    switch (this.sortOption) {
      case 'priceAsc':
        this.displayedProducts.sort((a, b) => a.price - b.price);
        break;

      case 'priceDesc':
        this.displayedProducts.sort((a, b) => b.price - a.price);
        break;

      case 'ratingDesc':
        this.displayedProducts.sort((a, b) => b.rating - a.rating);
        break;

      case 'nameAsc':
        this.displayedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
  }

  /** Pagination handlers */
  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.loadData();
    }
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
      this.loadData();
    }
  }

  viewProduct(id: number) {
    this.router.navigate(['/products', id]);
  }
}
