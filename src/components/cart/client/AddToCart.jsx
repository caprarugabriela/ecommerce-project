import { cartContext } from '@/contexts';
import { useCartActions } from '@/hooks/cart';
import { useContext } from 'react';
import { FaSpinner } from 'react-icons/fa';

export const AddToCart = ({ product }) => {
  const { title, id } = product;
  const { addToCart, adding, removeFromCart, removing } = useCartActions();
  const { cartProducts } = useContext(cartContext);
  let cartQuantity = 0;

  const cartProduct = cartProducts.find(({ productId }) => {
    return id === productId;
  });

  if (cartProduct) {
    cartQuantity = cartProduct.quantity;
  }

  const isProductInCart = !!cartProduct;

  const onClick = () => {
    isProductInCart ? removeFromCart(id, cartQuantity) : addToCart(id);
  };

  const busy = adding || removing;

  return (
    <button
      type="button"
      className="bg-black text-white uppercase font-medium text-sm py-3 px-6 hover:bg-violet-400 transition-colors"
      disabled={busy}
      title={
        isProductInCart ? `Remove ${title} from cart` : `Add ${title} to cart`
      }
      onClick={onClick}
    >
      {busy ? (
        <div class="animate-spin">
          <FaSpinner />
        </div>
      ) : isProductInCart ? (
        'Remove from Cart'
      ) : (
        'Add to Cart'
      )}
    </button>
  );
};
