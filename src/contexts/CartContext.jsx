import { useCart } from '@/hooks';
import { createContext } from 'react';

export const cartContext = createContext();

// hardcoded
const cartId = 2;

export const CartContext = ({ children }) => {
  const { cartProducts, loading, error, setCartProducts } = useCart(cartId);

  return (
    <cartContext.Provider
      value={{ cartProducts, loading, error, setCartProducts, cartId }}
    >
      {children}
    </cartContext.Provider>
  );
};
