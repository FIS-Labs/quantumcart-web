export interface OrderItem {
  productId: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export interface Order {
  id: number;
  total: number;
  paymentMethod: string;
  deliveryMethod: string;
  createdAt: string;
  status: string;
  statusDe: string;
  statusKey?: string; // English status for CSS selectors
  items: OrderItem[];
  shippingAddress: {
    name: string;
    street: string;
    city: string;
    postalCode: string;
    country: string;
    additionalNotes?: string;
  };
  email: string;
  userId?: number;
}
