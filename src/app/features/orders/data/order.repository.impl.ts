import { Injectable, inject } from '@angular/core';
import { OrderRepository } from '../domain/order.repository';
import { Order } from '../domain/order.model';
import { OrderService } from './order.service';
import { Observable } from 'rxjs';

@Injectable()
export class OrderRepositoryImpl implements OrderRepository {
  private service = inject(OrderService);

  place(order: Order): Observable<Order> {
    return this.service.createOrder(order);
  }

  getAll(): Observable<Order[]> {
    return this.service.getOrders();
  }
}
