import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslationService } from '../../../../core/services/translation/translation.service';
import { CartFacade } from '../../domain/cart.facade';
import { OrderFacade } from '../../../orders/domain/order.facade';

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
  translationService = inject(TranslationService);
  private router = inject(Router);

  items: any[] = [];
  total = 0;

  // Tax and delivery constants
  readonly TAX_RATE = 0.19; // 19% VAT
  readonly STANDARD_DELIVERY_COST = 4.99;
  readonly EXPRESS_DELIVERY_COST = 12.99;

  // Computed properties
  get subtotal(): number {
    return this.total;
  }

  get taxAmount(): number {
    return this.subtotal * this.TAX_RATE;
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
  street = '';
  city = '';
  postal = '';
  country = '';

  paymentMethod = 'credit';
  deliveryMethod = 'standard';

  ngOnInit() {
    this.cartFacade.cart$.subscribe((cart) => {
      this.items = cart.items;
      this.total = cart.total;
    });
  }

  submitted = false;

  placeOrder() {
    this.submitted = true;

    if (!this.name || !this.street || !this.city || !this.postal || !this.country) {
      alert(this.translationService.t('pleaseFillAllFields'));
      return;
    }

    const shipping = {
      name: this.name,
      street: this.street,
      city: this.city,
      postal: this.postal,
      country: this.country,
    };

    this.orderFacade.placeOrder(shipping, this.paymentMethod, this.deliveryMethod).subscribe({
      next: (order) => {
        alert(`${this.translationService.t('orderPlacedSuccess')} #${order.id}`);
        this.router.navigate(['/orders']);
      },
      error: (err) => {
        alert(`${this.translationService.t('cannotPlaceOrder')}: ${err.message}`);
      },
    });
  }
}
