import { Component, OnInit, inject, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { TranslationKey } from '../../../../core/models/translation/translation.types';
import { CommonModule, Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private facade = inject(ProductFacade);
  private cartFacade = inject(CartFacade);
  private location = inject(Location);
  private titleService = inject(Title);
  private cdr = inject(ChangeDetectorRef);
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
      this.titleService.setTitle(`QuantumCart - ${product.name}`);
      this.cdr.markForCheck();
    });

    this.translationService.lang$.subscribe(() => {
      this.cdr.markForCheck();
    });
  }

  addToCart() {
    this.cartFacade.addProduct(this.product);
  }

  objectKeys(obj: Record<string, unknown>): string[] {
    return Object.keys(obj);
  }

  getSpecLabel(key: string): string {
    const lowerKey = key.toLowerCase();
    // Try to find translation for the lowercased key
    const translated = this.translationService.t(lowerKey as TranslationKey);
    // If translation service returns the key itself (meaning no translation found) or empty,
    // we use the original key as a label.
    return translated && translated !== lowerKey ? translated : key;
  }

  getSpecs(): Record<string, string> {
    if (this.translationService.currentLang === 'de' && this.product.specsDe) {
      return this.product.specsDe;
    }
    return this.product.specs || {};
  }

  getWarranty(): string {
    if (this.translationService.currentLang === 'de' && this.product.warrantyDe) {
      return this.product.warrantyDe;
    }
    return this.product.warranty || '';
  }

  getReviewComment(review: { comment: string, commentDe?: string }): string {
    if (this.translationService.currentLang === 'de' && review.commentDe) {
      return review.commentDe;
    }
    return review.comment;
  }

  goBack() {
    this.location.back();
  }
}
