import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslationService } from '../../../core/services/translation/translation.service';
import { OrderFacade } from '../domain/order.facade';
import { Order } from '../domain/order.model';

@Component({
  standalone: true,
  selector: 'app-orders-page',
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersPageComponent implements OnInit {
  private orderFacade = inject(OrderFacade);
  translationService = inject(TranslationService);

  orders: Order[] = [];

  ngOnInit() {
    this.orderFacade.getOrders().subscribe((orders) => {
      this.orders = orders;
    });
  }

  /** Helper for translated status */
  getStatus(order: Order): string {
    return this.translationService.currentLang === 'en'
      ? order.status
      : (order.statusDe ?? order.status);
  }
}
