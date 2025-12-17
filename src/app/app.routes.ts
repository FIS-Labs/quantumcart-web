import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/splash/ui/splash.component').then((m) => m.SplashScreenComponent),
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: '',
    loadComponent: () =>
      import('./core/components/app-layout/app-layout.component').then((m) => m.AppLayoutComponent),
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('./features/products/products.routes').then((m) => m.PRODUCTS_ROUTES),
      },
      {
        path: 'cart',
        loadChildren: () => import('./features/cart/cart.routes').then((m) => m.CART_ROUTES),
      },
      {
        path: 'orders',
        loadChildren: () => import('./features/orders/orders.routes').then((m) => m.ORDERS_ROUTES),
      },
      {
        path: 'stores',
        loadChildren: () => import('./features/stores/stores.routes').then((m) => m.STORES_ROUTES),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./features/profile/ui/profile.component').then((m) => m.ProfilePageComponent),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
