export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  badge?: string;
  image: string;
  description: string;
  details: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  plan: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  totalPrice: number;
  status: 'pending' | 'verifying' | 'processing' | 'completed';
  paymentMethod: string;
  slipUploaded: boolean;
  createdAt: string;
}

export type ViewState = 'home' | 'shop' | 'detail' | 'login' | 'cart' | 'checkout' | 'success' | 'tracking' | 'contact' | 'faq';