import { cartContext } from '@/contexts';
import { baseUrl } from '@/index';
import { useContext, useState } from 'react';

export const useAddToCart = () => {
  const { setCartProducts, cartProducts, cartId } = useContext(cartContext);
  const [loading, setLoading] = useState(false);

  // user interaction: loading = false;
  // no user interaction, automated: loading = true;

  // assumption: only increment quanity
  /**
   *
   * {
   *   userId: 2,
   *   date: tema optional,
   *   products: [
   *     {
   *       productId: 2,
   *       quantity: 1
   *     }
   *   ]
   * }
   */
  const operation = (productId, quantity = 1) => {
    // clone cart products array
    const newProducts = [...cartProducts];

    // find product in cart:
    const cartProduct = newProducts.find((product) => {
      return product.productId === productId;
    });

    if (cartProduct) {
      cartProduct.quantity += quantity;
    } else {
      newProducts.push({
        productId,
        quantity,
      });
    }

    // build payload
    const payload = {
      cartId,
      userId: 2,
      products: newProducts,
    };

    setLoading(true);
    // make request
    // apiUrl/carts/2
    fetch(`${baseUrl}/carts/${cartId}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    })
      .then((response) => {
        return response.json();
      })
      .then((cart) => {
        // on successful request, update local cart
        console.log(cart);
        setCartProducts(newProducts);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { addToCart: operation, loading };
};
