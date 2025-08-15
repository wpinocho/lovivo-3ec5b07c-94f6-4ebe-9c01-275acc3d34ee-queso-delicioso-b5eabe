import { Cheese } from '../types/cheese';

export const cheeses: Cheese[] = [
  {
    id: '1',
    name: 'Manchego Curado',
    description: 'Queso tradicional español de leche de oveja, curado durante 12 meses. Sabor intenso y textura firme.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=300&fit=crop',
    origin: 'La Mancha, España',
    type: 'curado',
    intensity: 4,
    stock: 15
  },
  {
    id: '2',
    name: 'Cabrales',
    description: 'Queso azul asturiano de sabor fuerte y cremoso. Elaborado con leche de vaca, oveja y cabra.',
    price: 18.50,
    image: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=400&h=300&fit=crop',
    origin: 'Asturias, España',
    type: 'azul',
    intensity: 5,
    stock: 8
  },
  {
    id: '3',
    name: 'Mozzarella Fresca',
    description: 'Queso italiano fresco y cremoso, perfecto para ensaladas y pizzas.',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&h=300&fit=crop',
    origin: 'Italia',
    type: 'fresco',
    intensity: 1,
    stock: 25
  },
  {
    id: '4',
    name: 'Gouda Semicurado',
    description: 'Queso holandés semicurado con sabor suave y dulce. Ideal para aperitivos.',
    price: 16.75,
    image: 'https://images.unsplash.com/photo-1634141510639-d691d86f47be?w=400&h=300&fit=crop',
    origin: 'Holanda',
    type: 'semicurado',
    intensity: 2,
    stock: 12
  },
  {
    id: '5',
    name: 'Roquefort',
    description: 'Queso azul francés de leche de oveja, cremoso y con sabor característico.',
    price: 22.30,
    image: 'https://images.unsplash.com/photo-1571197119282-7c4e99e6e3d6?w=400&h=300&fit=crop',
    origin: 'Francia',
    type: 'azul',
    intensity: 4,
    stock: 6
  },
  {
    id: '6',
    name: 'Brie de Meaux',
    description: 'Queso francés cremoso con corteza blanca comestible. Sabor suave y elegante.',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?w=400&h=300&fit=crop',
    origin: 'Francia',
    type: 'fresco',
    intensity: 2,
    stock: 10
  }
];