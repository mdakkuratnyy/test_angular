export interface IProduct {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  images?: string[];
  creationAt?: string;
  updatedAt?: string;
  categoryId?: number;
  category?: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
}
