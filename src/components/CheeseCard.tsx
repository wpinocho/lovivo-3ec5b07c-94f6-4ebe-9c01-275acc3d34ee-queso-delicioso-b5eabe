import React from 'react';
import { Cheese } from '../types/cheese';
import { useCart } from '../contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Package } from 'lucide-react';

interface CheeseCardProps {
  cheese: Cheese;
}

const CheeseCard: React.FC<CheeseCardProps> = ({ cheese }) => {
  const { addToCart } = useCart();

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'fresco': return 'bg-green-100 text-green-800';
      case 'semicurado': return 'bg-yellow-100 text-yellow-800';
      case 'curado': return 'bg-orange-100 text-orange-800';
      case 'azul': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'fresco': return 'Fresco';
      case 'semicurado': return 'Semicurado';
      case 'curado': return 'Curado';
      case 'azul': return 'Azul';
      default: return type;
    }
  };

  const handleAddToCart = () => {
    console.log('Adding cheese to cart:', cheese.name);
    addToCart(cheese);
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={cheese.image}
          alt={cheese.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <Badge className={`absolute top-2 right-2 ${getTypeColor(cheese.type)}`}>
          {getTypeLabel(cheese.type)}
        </Badge>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold">{cheese.name}</CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{cheese.origin}</span>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <CardDescription className="text-sm mb-3">
          {cheese.description}
        </CardDescription>
        
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium">Intensidad: {cheese.intensity}/5</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Package className="w-4 h-4" />
            <span>{cheese.stock} disponibles</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-2">
        <div className="w-full flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            €{cheese.price.toFixed(2)}
          </span>
          <Button 
            onClick={handleAddToCart}
            disabled={cheese.stock === 0}
            className="bg-amber-600 hover:bg-amber-700"
          >
            {cheese.stock === 0 ? 'Agotado' : 'Añadir al carrito'}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CheeseCard;