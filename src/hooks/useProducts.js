//refactorizare
import { useEffect, useState } from 'react';

let cache = [];

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (cache.length === 0) {
      // fetch returns a promise
      fetch('https://fakestoreapi.com/products')
        .then((response) => {
          // respinse.json() returns a promise
          return response.json();
        })
        .then((products) => {
          cache = products;
          setProducts(products);
          setLoading(false);
        })
        .catch((error) => {
          console.dir(error);
          setLoading(false);
          setError('An error has occured');
        });
    } else {
      setProducts(cache);
      setLoading(false);
    }
  }, []);

  return { products, loading, error };
};
