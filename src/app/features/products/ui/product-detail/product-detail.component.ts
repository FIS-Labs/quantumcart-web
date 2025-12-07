import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TranslationService } from '../../../../core/services/translation/translation.service';
import { Product } from '../../domain/product.model';
import { ProductFacade } from '../../domain/product.facade';
import { CartFacade } from '../../../cart/domain/cart.facade';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private facade = inject(ProductFacade);
  private cartFacade = inject(CartFacade);
  translationService = inject(TranslationService);

  product!: Product;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.facade.getProductById(id).subscribe((product) => {
      if (!product) {
        console.error('Product not found');
        return;
      }
      this.product = product;
    });
  }

  addToCart() {
    this.cartFacade.addProduct(this.product);
  }
}
