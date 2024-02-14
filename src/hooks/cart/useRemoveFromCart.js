import { cartContext } from '@/contexts';
import { baseUrl } from '@/index';
import { useContext, useState } from 'react';

export const useRemoveFromCart = () => {
  const { setCartProducts, cartProducts, cartId } = useContext(cartContext);
  const [loading, setLoading] = useState(false);

  const operation = (productId, quantity = 1) => {
    // clone cart products
    const newProducts = [...cartProducts];

    // find product in cart
    const cartProduct = newProducts.find((product) => {
      return product.productId === productId;
    });

    if (cartProduct) {
      cartProduct.quantity -= quantity;
    } else {
      return;
    }

    // one more case:
    if (cartProduct.quantity <= 0) {
      const index = newProducts.findIndex((product) => {
        return product.productId === productId;
      });

      // splice mutates
      newProducts.splice(index, 1);
    }

    setLoading(true);
    fetch(`${baseUrl}/carts/${cartId}`, {
      method: 'PUT',
      body: JSON.stringify,
    })
      .then((response) => {
        return response.json();
      })
      .then((cart) => {
        console.log(cart);
        setCartProducts(newProducts);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { removeFromCart: operation, loading };
};
