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
  /** Injected services */
  private cartFacade = inject(CartFacade);
  private orderFacade = inject(OrderFacade);
  translationService = inject(TranslationService);
  private router = inject(Router);

  /** Cart state */
  items: any[] = [];
  total = 0;

  /** Address fields */
  name = '';
  street = '';
  city = '';
  postal = '';
  country = '';

  /** Payment + delivery */
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
        alert(`Order #${order.id} placed successfully.`);
        this.router.navigate(['/orders']);
      },
      error: (err) => {
        alert('Cannot place order: ' + err.message);
      },
    });
  }
}
