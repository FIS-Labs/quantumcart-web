import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../../../../core/services/translation/translation.service';
import { CartFacade } from '../../domain/cart.facade';
import { inject, OnInit } from '@angular/core';

import { CartItem } from '../../domain/cart.model';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  private cartFacade = inject(CartFacade);
  translationService = inject(TranslationService);
  private location = inject(Location);

  cart$ = this.cartFacade.cart$;
  items: CartItem[] = [];
  total = 0;

  ngOnInit() {
    this.cart$.subscribe((cart) => {
      this.items = cart.items;
      this.total = cart.total;
    });
  }

  updateQuantity(id: number, qty: number) {
    this.cartFacade.updateQuantity(id, qty);
  }

  remove(id: number) {
    this.cartFacade.remove(id);
  }

  goBack() {
    this.location.back();
  }
}
