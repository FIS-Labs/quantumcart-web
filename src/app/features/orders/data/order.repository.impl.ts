import { Injectable, inject } from '@angular/core';
import { OrderRepository } from '../domain/order.repository';
import { Order } from '../domain/order.model';
import { OrderService } from './order.service';
import { Observable, of } from 'rxjs';

@Injectable()
export class OrderRepositoryImpl implements OrderRepository {
  private service = inject(OrderService);

  place(order: Order): Observable<Order> {
    return of(this.service.createOrder(order));
  }

  getAll(): Observable<Order[]> {
    return of(this.service.getOrders());
  }
}
