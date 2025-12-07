import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AuthRepository } from './features/auth/domain/auth.repository';
import { AuthRepositoryImpl } from './features/auth/data/auth.repository.impl';
import { CartRepository } from './features/cart/domain/cart.repository';
import { CartRepositoryImpl } from './features/cart/data/cart.repository.impl';
import { ProductRepository } from './features/products/domain/product.repository';
import { ProductRepositoryImpl } from './features/products/data/product.repository.impl';
import { OrderRepository } from './features/orders/domain/order.repository';
import { OrderRepositoryImpl } from './features/orders/data/order.repository.impl';
import { StoreRepository } from './features/stores/domain/store.repository';
import { StoreRepositoryImpl } from './features/stores/data/store.repository.impl';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: AuthRepository, useClass: AuthRepositoryImpl },
    { provide: CartRepository, useClass: CartRepositoryImpl },
    { provide: ProductRepository, useClass: ProductRepositoryImpl },
    { provide: OrderRepository, useClass: OrderRepositoryImpl },
    { provide: StoreRepository, useClass: StoreRepositoryImpl },
  ],
};
