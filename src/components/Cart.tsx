import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';

const Cart: React.FC = () => {
  const { items, updateQuantity, removeFromCart, clearCart, getTotalPrice, getTotalItems } = useCart();

  const handleCheckout = () => {
    console.log('Processing checkout with items:', items);
    toast.success('¡Pedido realizado con éxito! Gracias por tu compra.');
    clearCart();
  };

  if (items.length === 0) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Carrito de Compras
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground py-8">
            Tu carrito está vacío
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Carrito de Compras
          </div>
          <Badge variant="secondary">
            {getTotalItems()} {getTotalItems() === 1 ? 'artículo' : 'artículos'}
          </Badge>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {items.map((item) => (
          <div key={item.cheese.id} className="flex items-center gap-3 p-3 border rounded-lg">
            <img
              src={item.cheese.image}
              alt={item.cheese.name}
              className="w-16 h-16 object-cover rounded"
            />
            
            <div className="flex-grow">
              <h4 className="font-medium text-sm">{item.cheese.name}</h4>
              <p className="text-sm text-muted-foreground">
                €{item.cheese.price.toFixed(2)} c/u
              </p>
              
              <div className="flex items-center gap-2 mt-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => updateQuantity(item.cheese.id, item.quantity - 1)}
                  className="w-8 h-8 p-0"
                >
                  <Minus className="w-3 h-3" />
                </Button>
                
                <span className="w-8 text-center font-medium">{item.quantity}</span>
                
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => updateQuantity(item.cheese.id, item.quantity + 1)}
                  className="w-8 h-8 p-0"
                  disabled={item.quantity >= item.cheese.stock}
                >
                  <Plus className="w-3 h-3" />
                </Button>
                
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => removeFromCart(item.cheese.id)}
                  className="w-8 h-8 p-0 ml-2"
                >
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </div>
            
            <div className="text-right">
              <p className="font-bold">
                €{(item.cheese.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
        
        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-bold">Total:</span>
            <span className="text-2xl font-bold text-primary">
              €{getTotalPrice().toFixed(2)}
            </span>
          </div>
          
          <div className="space-y-2">
            <Button 
              onClick={handleCheckout}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              Finalizar Compra
            </Button>
            <Button 
              onClick={clearCart}
              variant="outline"
              className="w-full"
            >
              Vaciar Carrito
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Cart;