import { Injectable, inject } from '@angular/core';
import { Observable, combineLatest, map, BehaviorSubject, switchMap, startWith } from 'rxjs';
import { OrderRepository } from '../domain/order.repository';
import { Order } from './order.model';
import { CartFacade } from '../../cart/domain/cart.facade';
import { AuthFacade } from '../../auth/domain/auth.facade';
import { TranslationService } from '../../../core/services/translation/translation.service';

interface ShippingForm {
  name: string;
  email: string;
  street: string;
  city: string;
  postal: string;
  country: string;
  additionalNotes?: string;
}

@Injectable({ providedIn: 'root' })
export class OrderFacade {
  private cart = inject(CartFacade);
  private repo = inject(OrderRepository);
  private auth = inject(AuthFacade);
  private translationService = inject(TranslationService);

  private refreshSubject = new BehaviorSubject<void>(undefined);

  orders$ = combineLatest([
    this.refreshSubject.pipe(
      switchMap(() => this.repo.getAll().pipe(startWith([] as Order[])))
    ),
    this.translationService.lang$
  ]).pipe(
    map(([orders, lang]) => orders.map(o => this.mapTranslated(o, lang)))
  );

  refreshOrders() {
    this.refreshSubject.next();
  }

  placeOrder(
    shipping: ShippingForm,
    paymentMethod: string,
    deliveryMethod: string,
  ): Observable<Order> {
    const cart = this.cart.getSnapshot();
    const currentUser = this.auth.currentUser();

    const newOrder: Partial<Order> = {
      total: cart.total,
      paymentMethod,
      deliveryMethod,
      email: shipping.email,
      userId: currentUser?.id,

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
        additionalNotes: shipping.additionalNotes,
      },
    };

    return this.repo.place(newOrder as Order).pipe(
      map((order) => {
        this.cart.clear();
        return order;
      }),
    );
  }

  getOrders(): Observable<Order[]> {
    return this.orders$;
  }

  private mapTranslated(o: Order, lang: string): Order {
    return {
      ...o,
      status: lang === 'de' ? (o.statusDe || o.status) : o.status,
      statusKey: o.status // Always keep English status for CSS selectors
    };
  }
}
