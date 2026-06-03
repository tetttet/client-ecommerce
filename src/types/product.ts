export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  commentsCount: number;
  currency: string;
  images: string[];
}
