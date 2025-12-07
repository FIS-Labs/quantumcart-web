import { Routes } from '@angular/router';
import { ProductListComponent } from './ui/product-list/product-list.component';
import { ProductDetailComponent } from './ui/product-detail/product-detail.component';

export const PRODUCTS_ROUTES: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ProductListComponent },
      { path: ':id', component: ProductDetailComponent },
    ],
  },
];
