import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslationService } from '../../../../core/services/translation/translation.service';
import { CartFacade } from '../../domain/cart.facade';
import { OrderFacade } from '../../../orders/domain/order.facade';
import { AuthFacade } from '../../../auth/domain/auth.facade';

import { CartItem } from '../../domain/cart.model';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
})
export class CheckoutPageComponent implements OnInit {
  private cartFacade = inject(CartFacade);
  private orderFacade = inject(OrderFacade);
  private authFacade = inject(AuthFacade);
  translationService = inject(TranslationService);
  private router = inject(Router);
  private location = inject(Location);

  items: CartItem[] = [];
  total = 0;

  checkoutStep: 'auth-selection' | 'cart-details' | 'shipping-form' = 'shipping-form';

  goBack() {
    if (this.checkoutStep === 'shipping-form' && !this.isLoggedIn) {
      this.checkoutStep = 'auth-selection';
      return;
    }
    this.location.back();
  }

  readonly TAX_RATE = 0.19;
  readonly STANDARD_DELIVERY_COST = 4.99;
  readonly EXPRESS_DELIVERY_COST = 12.99;

  get subtotal(): number {
    return this.total;
  }

  get taxAmount(): number {
    return this.subtotal * this.TAX_RATE;
  }

  get isLoggedIn(): boolean {
    return this.authFacade.isLoggedIn();
  }

  get deliveryCost(): number {
    return this.deliveryMethod === 'express'
      ? this.EXPRESS_DELIVERY_COST
      : this.STANDARD_DELIVERY_COST;
  }

  get grandTotal(): number {
    return this.subtotal + this.taxAmount + this.deliveryCost;
  }

  name = '';
  email = '';
  street = '';
  city = '';
  postal = '';
  country = '';
  additionalNotes = '';

  paymentMethod = 'credit';
  deliveryMethod = 'standard';

  ngOnInit() {
    this.cartFacade.cart$.subscribe((cart) => {
      this.items = cart.items;
      this.total = cart.total;
    });

    this.authFacade.currentUser$.subscribe((user) => {
      if (user) {
        this.checkoutStep = 'shipping-form';
        this.name = user.name;
        this.email = user.email;
        this.street = user.street || '';
        this.city = user.city || '';
        this.postal = user.postalCode || '';
        this.country = user.country || '';
        this.additionalNotes = user.additionalNotes || '';
      } else {
        this.checkoutStep = 'auth-selection';
        // Clear fields on logout
        this.name = '';
        this.email = '';
        this.street = '';
        this.city = '';
        this.postal = '';
        this.country = '';
        this.additionalNotes = '';
      }
    });
  }


  continueAsGuest() {
    this.checkoutStep = 'shipping-form';
  }

  goToLogin() {
    this.router.navigate(['/auth/login'], { queryParams: { returnUrl: '/cart/checkout' } });
  }


  submitted = false;

  placeOrder() {
    this.submitted = true;

    if (!this.name || !this.email || !this.street || !this.city || !this.postal || !this.country) {
      alert(this.translationService.t('pleaseFillAllFields'));
      return;
    }

    const shipping = {
      name: this.name,
      email: this.email,
      street: this.street,
      city: this.city,
      postal: this.postal,
      country: this.country,
      additionalNotes: this.additionalNotes,
    };

    this.orderFacade.placeOrder(shipping, this.paymentMethod, this.deliveryMethod).subscribe({
      next: (order) => {
        alert(`${this.translationService.t('orderPlacedSuccess')} #${order.id}`);

        if (this.authFacade.isLoggedIn()) {
          this.router.navigate(['/orders']);
        } else {
          this.router.navigate(['/']);
        }
      },
      error: (err) => {
        alert(`${this.translationService.t('cannotPlaceOrder')}: ${err.message}`);
      },
    });
  }
}
