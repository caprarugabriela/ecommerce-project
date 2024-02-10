import { useEffect, useState } from 'react';
import { baseUrl } from '..';

const productCache = {};

export const useProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (productCache[productId] === undefined) {
      fetch(`${baseUrl}/products/${productId}`)
        .then((response) => {
          return response.json();
        })
        .then((product) => {
          productCache[productId] = product;
          setProduct(product);
          setLoading(false);
        });
    } else {
      setLoading(false);
      setProduct(productCache[productId]);
    }
  }, [productId]);

  return { product, loading };
};
