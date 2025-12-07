import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { CartRepository } from '../domain/cart.repository';
import { CartItem } from '../domain/cart.model';
import { Product } from '../../products/domain/product.model';

@Injectable({ providedIn: 'root' })
export class CartFacade {
  private repo = inject(CartRepository);

  cart$ = this.repo.getCart();

  cartCount$ = this.cart$.pipe(
    map((cart) => cart.items.reduce((acc: number, item: CartItem) => acc + item.quantity, 0))
  );

  addProduct(product: Product) {
    const item: CartItem = {
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      imageUrl: product.imageUrl,
      category: product.category,
      categoryDe: product.categoryDe,
      oldPrice: product.oldPrice,
      rating: product.rating,
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
