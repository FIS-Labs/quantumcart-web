import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem, Cart } from '../domain/cart.model';
import { CartRepository } from '../domain/cart.repository';
import { CartService } from './cart.service';

@Injectable()
export class CartRepositoryImpl implements CartRepository {
  private cartService = inject(CartService);

  private cartSubject = new BehaviorSubject<Cart>(this.cartService.getCart());

  getCart(): Observable<Cart> {
    console.log('called');
    return this.cartSubject.asObservable();
  }

  getSnapshot(): Cart {
    return this.cartSubject.value;
  }

  addItem(item: CartItem): void {
    console.log(item);
    this.cartService.addItem(item);
    this.cartSubject.next(this.cartService.getCart());
  }

  updateQuantity(id: number, qty: number): void {
    this.cartService.updateQuantity(id, qty);
    this.cartSubject.next(this.cartService.getCart());
  }

  removeItem(id: number): void {
    this.cartService.removeItem(id);
    this.cartSubject.next(this.cartService.getCart());
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartSubject.next(this.cartService.getCart());
  }
}
