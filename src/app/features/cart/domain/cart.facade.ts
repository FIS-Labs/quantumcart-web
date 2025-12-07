import { Injectable, inject } from '@angular/core';
import { CartRepository } from '../domain/cart.repository';
import { CartItem } from '../domain/cart.model';

@Injectable({ providedIn: 'root' })
export class CartFacade {
  private repo = inject(CartRepository);

  cart$ = this.repo.getCart();

  addProduct(product: any) {
    const item: CartItem = {
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      imageUrl: product.imageUrl,
      category: product.category,
      categoryDe: product.categoryDe,
    };
    this.repo.addItem(item);
  }

  updateQuantity(id: number, qty: number) {
    this.repo.updateQuantity(id, qty);
  }

  remove(id: number) {
    this.repo.removeItem(id);
  }

  clear() {
    this.repo.clearCart();
  }

  getSnapshot() {
    return this.repo.getSnapshot();
  }
}
