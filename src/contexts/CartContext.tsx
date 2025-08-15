import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, Cheese } from '../types/cheese';
import { toast } from 'sonner';

interface CartContextType {
  items: CartItem[];
  addToCart: (cheese: Cheese, quantity?: number) => void;
  removeFromCart: (cheeseId: string) => void;
  updateQuantity: (cheeseId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (cheese: Cheese, quantity = 1) => {
    console.log('Adding to cart:', cheese.name, 'quantity:', quantity);
    
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.cheese.id === cheese.id);
      
      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        if (newQuantity > cheese.stock) {
          toast.error(`Solo hay ${cheese.stock} unidades disponibles de ${cheese.name}`);
          return prevItems;
        }
        toast.success(`${cheese.name} actualizado en el carrito`);
        return prevItems.map(item =>
          item.cheese.id === cheese.id
            ? { ...item, quantity: newQuantity }
            : item
        );
      } else {
        if (quantity > cheese.stock) {
          toast.error(`Solo hay ${cheese.stock} unidades disponibles de ${cheese.name}`);
          return prevItems;
        }
        toast.success(`${cheese.name} añadido al carrito`);
        return [...prevItems, { cheese, quantity }];
      }
    });
  };

  const removeFromCart = (cheeseId: string) => {
    console.log('Removing from cart:', cheeseId);
    setItems(prevItems => {
      const item = prevItems.find(item => item.cheese.id === cheeseId);
      if (item) {
        toast.success(`${item.cheese.name} eliminado del carrito`);
      }
      return prevItems.filter(item => item.cheese.id !== cheeseId);
    });
  };

  const updateQuantity = (cheeseId: string, quantity: number) => {
    console.log('Updating quantity:', cheeseId, quantity);
    if (quantity <= 0) {
      removeFromCart(cheeseId);
      return;
    }

    setItems(prevItems =>
      prevItems.map(item => {
        if (item.cheese.id === cheeseId) {
          if (quantity > item.cheese.stock) {
            toast.error(`Solo hay ${item.cheese.stock} unidades disponibles`);
            return item;
          }
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    console.log('Clearing cart');
    setItems([]);
    toast.success('Carrito vaciado');
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.cheese.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalPrice,
      getTotalItems
    }}>
      {children}
    </CartContext.Provider>
  );
};