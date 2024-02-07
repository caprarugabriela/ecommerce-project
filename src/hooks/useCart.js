import { useEffect, useState } from 'react';
import { baseUrl } from '..';

export const useCart = (cartId = 2) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${baseUrl}/carts/${cartId}`)
      .then((response) => {
        return response.json();
      })
      .then((cart) => {
        console.log(cart);
      });
  }, [cartId]);

  return { cartProducts, loading, error };
};
