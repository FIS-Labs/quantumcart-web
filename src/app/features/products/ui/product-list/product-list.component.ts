import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCTS } from '../../data/product.data';
import { Product } from '../../domain/product.model';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductCardComponent } from '../components/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    ProductCardComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = PRODUCTS;
  displayedProducts: Product[] = [];

  categories: string[] = [];
  selectedCategory = 'all';

  sortOption = 'priceAsc';

  constructor(private router: Router) {}

  ngOnInit() {
    this.categories = [...new Set(this.products.map(p => p.category))];
    this.applyFilters();
  }

  applyFilters() {
    this.displayedProducts = this.selectedCategory === 'all'
      ? [...this.products]
      : this.products.filter(p => p.category === this.selectedCategory);

    this.applySorting();
  }

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

  viewProduct(id: number) {
    this.router.navigate(['/products', id]);
  }
}
