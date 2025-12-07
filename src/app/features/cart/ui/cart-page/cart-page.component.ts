import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../../../../core/services/translation/translation.service';
import { CartFacade } from '../../domain/cart.facade';
import { inject } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent {
  private cartFacade = inject(CartFacade);
  translationService = inject(TranslationService);

  cart$ = this.cartFacade.cart$;
  items: any[] = [];
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
}
