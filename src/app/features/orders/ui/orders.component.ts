import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { TranslationService } from '../../../core/services/translation/translation.service';
import { OrderFacade } from '../domain/order.facade';

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
  router = inject(Router);

  orders$ = this.orderFacade.orders$;

  ngOnInit() {
    this.orderFacade.refreshOrders();
  }
}
