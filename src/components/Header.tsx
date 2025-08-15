import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Store } from 'lucide-react';

const Header: React.FC = () => {
  const { getTotalItems } = useCart();

  return (
    <header className="bg-amber-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Store className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Quesería Artesanal</h1>
              <p className="text-amber-100 text-sm">Los mejores quesos del mundo</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-6 h-6" />
            <Badge variant="secondary" className="bg-white text-amber-600">
              {getTotalItems()}
            </Badge>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;