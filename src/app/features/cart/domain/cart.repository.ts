import { Observable } from 'rxjs';
import { CartItem, Cart } from './cart.model';

export abstract class CartRepository {
  abstract getCart(): Observable<Cart>;
  abstract getSnapshot(): Cart;

  abstract addItem(item: CartItem): void;
  abstract updateQuantity(id: number, qty: number): void;
  abstract removeItem(id: number): void;
  abstract clearCart(): void;
}
