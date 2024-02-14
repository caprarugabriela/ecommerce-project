import { useAddToCart } from './useAddToCart';
import { useRemoveFromCart } from './useRemoveFromCart';

// convenience forced aggregator hook
export const useCartActions = () => {
  const { addToCart, loading: adding } = useAddToCart();
  const { removeFromCart, loading: removing } = useRemoveFromCart();

  return {
    addToCart,
    removeFromCart,
    adding,
    removing,
  };
};
