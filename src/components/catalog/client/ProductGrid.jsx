import Image from 'next/image';
import { useEffect, useState } from 'react';

export const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch returns a promise
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        // respinse.json() returns a promise
        return response.json();
      })
      .then((products) => {
        console.log(products);
        setProducts(products);
      });
  }, []);

  return (
    <ul>
      {products.map((product) => {
        const { price, title, image, id } = product;

        return (
          <li key={id}>
            <h1>{title}</h1>
            <p>{price}</p>

            <Image
              src={image}
              width={200}
              height={200}
              objectFit="contain"
              alt={title}
            ></Image>
          </li>
        );
      })}
    </ul>
  );
};
