import { Product } from "../../products/domain/product.model";

export interface CartItem {
  product: Product;
  quantity: number;
}
