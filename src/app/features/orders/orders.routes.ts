import { Routes } from '@angular/router';
import { OrdersPageComponent } from './ui//orders.component';

export const ORDERS_ROUTES: Routes = [
  {
    path: '',
    children: [{ path: '', component: OrdersPageComponent }],
  },
];
