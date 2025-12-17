export interface CartItem {
  productId: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  category: string;
  categoryDe: string;
  oldPrice?: number;
  rating?: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}
