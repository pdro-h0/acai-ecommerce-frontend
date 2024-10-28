"use client";

import { Cart, CartItem, Product } from "@/core";
import { createContext, ReactNode, useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface CartContextProps {
  items: CartItem[];
  itemsQuantity: number;
  total: number;
  addItem: (product: Product) => void;
  removeItem: (product: Product) => void;
  removeProduct: (product: Product) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextProps>({
  items: [],
  itemsQuantity: 0,
  total: 0,
  addItem: function (): void {},
  removeItem: function (): void {},
  removeProduct: function (): void {},
  clearCart: function (): void {},
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart>(new Cart());
  const { getItem, saveItem } = useLocalStorage()

  const changeCart = (cart: Cart) => {
    saveItem("cart", cart.items)
    setCart(cart);
  };

  const addItem = (product: Product) => {
    changeCart(cart.addItem(product));
  };

  const removeItem = (product: Product) => {
    changeCart(cart.removeItem(product));
  };

  const removeProduct = (product: Product) => {
    changeCart(cart.removeProduct(product));
  };

  const clearCart = () => {
    changeCart(cart.clear());
  };

   useEffect(() => {
     const savedItems = getItem("cart");
     if (savedItems) setCart(new Cart(savedItems));
   }, [getItem]);
  

  return (
    <CartContext.Provider
      value={{
        items: cart.items,
        addItem,
        removeItem,
        total: cart.totalValor,
        itemsQuantity: cart.itemsQuantity,
        clearCart,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
