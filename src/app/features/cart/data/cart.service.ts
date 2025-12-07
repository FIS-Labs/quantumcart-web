import { Injectable } from '@angular/core';
import { Cart, CartItem } from '../domain/cart.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private CART_KEY = 'qc_cart';

  private loadCart(): Cart {
    const raw = localStorage.getItem(this.CART_KEY);
    return raw ? JSON.parse(raw) : { items: [], total: 0 };
  }

  private saveCart(cart: Cart) {
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart));
  }

  getCart(): Cart {
    return this.loadCart();
  }

  addItem(item: CartItem) {
    const cart = this.loadCart();

    const existing = cart.items.find((i) => i.productId === item.productId);

    if (existing) {
      existing.quantity += item.quantity;
    } else {
      cart.items.push(item);
    }

    cart.total = this.calculateTotal(cart);
    this.saveCart(cart);
  }

  updateQuantity(productId: number, quantity: number) {
    const cart = this.loadCart();
    const item = cart.items.find((i) => i.productId === productId);

    if (item) {
      item.quantity = quantity;
    }

    cart.total = this.calculateTotal(cart);
    this.saveCart(cart);
  }

  removeItem(productId: number) {
    const cart = this.loadCart();
    cart.items = cart.items.filter((i) => i.productId !== productId);

    cart.total = this.calculateTotal(cart);
    this.saveCart(cart);
  }

  clearCart() {
    this.saveCart({ items: [], total: 0 });
  }

  private calculateTotal(cart: Cart): number {
    return cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  }
}
