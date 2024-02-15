import { useEffect, useState } from 'react';
import { baseUrl } from '@/index';
import Image from 'next/image';
import Link from 'next/link';
import { AddToCart } from '@/components/cart/client';
import { ProductPrice } from './ProductPrice';
import { Spinner } from '@/components/ui/client';

export const RelatedProducts = ({ productCategory, productId }) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${baseUrl}/products/category/${productCategory}?limit=4`)
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching related products:', error);
        setLoading(false);
      });
  }, [productCategory]);

  if (loading) {
    return (
      <div>
        <Spinner></Spinner>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center bg-black text-white text-center font-bold text-xl p-6">
        There are no related products
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-5 mb-18">
      <h1 className="text-center uppercase font-medium text-xl mb-6">
        Related Products
      </h1>

      <ul className="flex flex-col lg:flex-row gap-12 justify-between">
        {products.map((product) => {
          const { title, price, image: imageUrl, id } = product;

          if (id === productId) {
            return null;
          }

          return (
            <li className="w-full" layout="position" key={id}>
              <article>
                <header>
                  <div className="w-full text-center">
                    <Link href={`/products/${id}`} title={title}>
                      <Image
                        className="mx-auto"
                        src={imageUrl}
                        width={200}
                        height={200}
                        style={{
                          objectFit: 'contain',
                          width: '200px',
                          height: '200px',
                        }}
                        alt={`Image for product ${title}`}
                      ></Image>
                    </Link>
                  </div>
                </header>

                <section className="mt-8 text-center text-sm flex flex-col items-center justify-between gap-4">
                  <h1 className="uppercase text-zinc-400 mb-2">{title}</h1>

                  <div className="text-zinc-900 font-light">
                    <ProductPrice price={price} />
                  </div>

                  <div>
                    <AddToCart product={product}></AddToCart>
                  </div>
                </section>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
