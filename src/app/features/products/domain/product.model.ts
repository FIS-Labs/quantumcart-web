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
  inStock: boolean;
  imageUrl: string;
  brand: string;
  reviewCount: number;
  reviews?: Review[];
  specs?: Record<string, string>;
  specsDe?: Record<string, string>;
  warranty?: string;
  warrantyDe?: string;
}

export interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
  commentDe?: string;
  date: string;
}

export interface PaginatedProducts {
  items: Product[];
  total: number;
  page: number;
  pageSize: number;
}


