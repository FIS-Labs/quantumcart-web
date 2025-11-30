import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../../../core/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent {
  
  constructor(
    private cart: CartService,
    private router: Router
  ) {}

  /* ADDRESS FORM */
  name: string = '';
  street: string = '';
  city: string = '';
  postal: string = '';
  country: string = '';

  /* PAYMENT + DELIVERY */
  paymentMethod = 'credit';
  deliveryMethod = 'standard';

  get items() {
    return this.cart.getCart();
  }

  get total() {
    return this.cart.getTotal();
  }

  placeOrder() {
    // Only static UI for now
    alert('Order placed (static mock). Backend wiring comes later!');
    this.cart.clearCart();
    this.router.navigate(['/products']);
  }
  
}
