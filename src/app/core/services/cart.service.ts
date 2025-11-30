import { Injectable } from '@angular/core';
import { CartItem } from '../../features/cart/domain/cart-item.model';
import { Product } from '../../features/products/domain/product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private static instanceId = Math.random().toString(36).substring(2, 8);
  id = CartService.instanceId;

  private items: CartItem[] = [];

  constructor() {
    console.log("🔥 CartService instance created:", this.id);
  }

  getCart(): CartItem[] {
    return this.items;
  }

  addItem(product: Product) {
    const existing = this.items.find(i => i.product.id === product.id);

    if (existing) {
      existing.quantity++;
    } else {
      this.items.push({ product, quantity: 1 });
    }
    console.log(this.getCart());
  }

  updateQuantity(productId: number, qty: number) {
    const item = this.items.find(i => i.product.id === productId);
    if (item) item.quantity = qty;
  }

  removeItem(productId: number) {
    this.items = this.items.filter(i => i.product.id !== productId);
  }

  clearCart() {
    this.items = [];
  }

  getTotal(): number {
    return this.items.reduce((sum, item) =>
      sum + item.product.price * item.quantity, 0
    );
  }
}
