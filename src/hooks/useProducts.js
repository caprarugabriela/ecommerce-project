//refactorizare
import { useEffect, useState } from 'react';

let cache = [];

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
        });
    } else {
      setProducts(cache);
    }
  }, []);

  return { products, loading };
};
