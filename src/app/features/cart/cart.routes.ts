import { Routes } from '@angular/router';
import { CartPageComponent } from './ui/cart-page/cart-page.component';
import { CheckoutPageComponent } from './ui/checkout-page/checkout-page.component';

export const CART_ROUTES: Routes = [
  { path: '', component: CartPageComponent },
  { path: 'checkout', component: CheckoutPageComponent }
];
