export interface Cheese {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  origin: string;
  type: 'fresco' | 'curado' | 'semicurado' | 'azul';
  intensity: 1 | 2 | 3 | 4 | 5;
  stock: number;
}

export interface CartItem {
  cheese: Cheese;
  quantity: number;
}