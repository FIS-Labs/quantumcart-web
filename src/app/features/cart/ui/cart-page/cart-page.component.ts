import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../../core/services/cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  constructor(private cart: CartService) {}

  get items() {
    console.log("CartPage using CartService:", this.cart.id);
    console.log("Cart when rendering cart page:", this.cart.getCart());
    return this.cart.getCart();
  }

  updateQuantity(id: number, qty: number) {
    this.cart.updateQuantity(id, qty);
  }

  remove(id: number) {
    this.cart.removeItem(id);
  }

  get total() {
    return this.cart.getTotal();
  }
}
