import { Injectable } from '@angular/core';
import { MOCK_ORDERS } from './mock-orders.json';
import { Order } from '../domain/order.model';

@Injectable({ providedIn: 'root' })
export class OrderService {
  createOrder(order: Order): Order {
    order.id = Date.now();
    order.createdAt = new Date().toISOString();
    MOCK_ORDERS.push(order);
    return order;
  }

  getOrders(): Order[] {
    return MOCK_ORDERS;
  }
}
