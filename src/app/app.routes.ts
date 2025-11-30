import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./core/components/splash/splash.routes').then(m => m.SPLASH_ROUTES)
    },
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: 'products',
        loadChildren: () => import('./features/products/products.routes').then(m => m.PRODUCTS_ROUTES)
    },
    {
        path: 'cart',
        loadChildren: () =>
            import('./features/cart/cart.routes').then(m => m.CART_ROUTES)
    },
    {
        path: 'checkout',
        redirectTo: 'cart/checkout'
    },
    {
        path: '**',
        redirectTo: ''
    }
];
