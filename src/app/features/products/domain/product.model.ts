export interface Product {
  id: number;
  name: string;
  category: string;
  categoryDe: string;
  price: number;
  oldPrice?: number;
  rating: number;
  description: string;
  descriptionDe: string;

  imageUrl: string;
}

export interface PaginatedProducts {
  items: Product[];
  total: number;
  page: number;
  pageSize: number;
}
