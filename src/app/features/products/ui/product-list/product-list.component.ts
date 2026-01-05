import { Component, OnInit, inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

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
  imports: [FormsModule, MatSelectModule, MatFormFieldModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  translationService = inject(TranslationService);
  private facade = inject(ProductFacade);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  displayedProducts: Product[] = [];
  rawProducts: Product[] = [];
  filteredProducts: Product[] = [];

  total = 0;
  page = 1;
  pageSize = 12;
  totalPages = 1;

  categories: string[] = [];
  selectedCategory = 'all';
  sortOption = 'priceAsc';

  brands: string[] = [];
  selectedBrand = 'all';
  showOutOfStock = true;
  minPrice = 0;
  maxPrice = 3000;



  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.facade.getAll().subscribe((products) => {
      this.rawProducts = products;
      this.populateCategories();
      this.populateBrands();
      this.applyFilters();
      this.cdr.markForCheck();
    });
  }



  populateCategories() {
    const lang = this.translationService.currentLang;
    this.categories = [
      ...new Set(this.rawProducts.map((p) => (lang === 'en' ? p.category : p.categoryDe))),
    ];
  }

  populateBrands() {
    this.brands = [...new Set(this.rawProducts.map((p) => p.brand || 'Generic'))];
  }

  applyFilters() {
    const lang = this.translationService.currentLang;

    this.filteredProducts = this.rawProducts.filter((p) => {
      const matchCategory =
        this.selectedCategory === 'all' ||
        (lang === 'en' ? p.category : p.categoryDe) === this.selectedCategory;

      const matchBrand = this.selectedBrand === 'all' || (p.brand || 'Generic') === this.selectedBrand;

      const matchStock = this.showOutOfStock ? true : p.inStock;

      const matchPrice = p.price >= this.minPrice && p.price <= this.maxPrice;

      return matchCategory && matchBrand && matchStock && matchPrice;
    });

    this.page = 1;
    this.applySorting();
    this.cdr.markForCheck();
  }

  applySorting() {
    switch (this.sortOption) {
      case 'priceAsc':
        this.filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        this.filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'ratingDesc':
        this.filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      case 'nameAsc':
        this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    this.updatePagination();
  }

  updatePagination() {
    this.total = this.filteredProducts.length;
    this.totalPages = Math.ceil(this.total / this.pageSize);
    if (this.totalPages === 0) this.totalPages = 1;

    this.updateDisplayedPage();
  }

  updateDisplayedPage() {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.displayedProducts = this.filteredProducts.slice(start, end);
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.updateDisplayedPage();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
      this.updateDisplayedPage();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  viewProduct(id: number) {
    this.router.navigate(['/products', id]);
  }
}
