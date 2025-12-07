import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { OrderRepository } from '../domain/order.repository';
import { Order } from '../domain/order.model';
import { CartFacade } from '../../cart/domain/cart.facade';

interface ShippingForm {
  name: string;
  street: string;
  city: string;
  postal: string;
  country: string;
}

@Injectable({ providedIn: 'root' })
export class OrderFacade {
  private cart = inject(CartFacade);
  private repo = inject(OrderRepository);

  /** Create an order from current cart */
  placeOrder(
    shipping: ShippingForm,
    paymentMethod: string,
    deliveryMethod: string,
  ): Observable<Order> {
    const cart = this.cart.getSnapshot();

    const newOrder: Order = {
      id: 0,
      createdAt: '',
      total: cart.total,
      paymentMethod,
      deliveryMethod,

      // If backend provides these fields, REMOVE them.
      status: 'Processing',
      statusDe: 'Verarbeitung',

      items: cart.items.map((i) => ({
        productId: i.productId,
        name: i.name,
        price: i.price,
        quantity: i.quantity,
        imageUrl: i.imageUrl,
      })),

      shippingAddress: {
        name: shipping.name,
        street: shipping.street,
        city: shipping.city,
        postalCode: shipping.postal,
        country: shipping.country,
      },
    };

    return this.repo.place(newOrder).pipe(
      map((order) => {
        this.cart.clear();
        return order;
      }),
    );
  }

  /** Get all past orders */
  getOrders(): Observable<Order[]> {
    return this.repo.getAll();
  }
}
