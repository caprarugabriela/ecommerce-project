import { useEffect, useState } from 'react';
import { baseUrl } from '../..';

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
        const { products } = cart;
        setLoading(false);
        setCartProducts(products);
      })
      .catch(() => {
        console.dir(error);
        setLoading(false);
        setError('An error has occured!');
      });
  }, [cartId]);

  return { cartProducts, loading, error, setCartProducts };
};
