import { Observable } from 'rxjs';
import { Order } from './order.model';

export abstract class OrderRepository {
  abstract place(order: Order): Observable<Order>;
  abstract getAll(): Observable<Order[]>;
}
