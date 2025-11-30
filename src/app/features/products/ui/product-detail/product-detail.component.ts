import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PRODUCTS } from '../../data/product.data';
import { Product } from '../../domain/product.model';
import { CartService } from '../../../../core/services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private cart: CartService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = PRODUCTS.find(p => p.id === id)!;
  }

  addToCart() {
    console.log("ProductDetail using CartService:", this.cart.id);
    this.cart.addItem(this.product);
    console.log("Cart AFTER add:", this.cart.getCart());
  }
}
