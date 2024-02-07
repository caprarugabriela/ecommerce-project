import { useProducts } from '@/hooks';
import { ProductTile } from './ProductTile';
import { css } from '@emotion/css';
import { ThreeDots } from 'react-loader-spinner';
import { useContext, useEffect, useState } from 'react';
import { uiContext } from '@/contexts';
import Image from 'next/image';
import pacMan from '../../../../public/images/pac-man.png';

export const ProductGrid = () => {
  const { itemsPerRow, pagination } = useContext(uiContext);
  const { perPage, page } = pagination;
  const { products, loading, error } = useProducts();
  const [paginatedProducts, setPaginatedProducts] = useState([]);

  useEffect(() => {
    const newPaginatedProducts = products
      .slice()
      .splice(perPage * (page - 1), perPage);

    setPaginatedProducts(newPaginatedProducts);
  }, [products, perPage, page]);

  const gridCssClass = css`
    display: grid;
    row-gap: 32px;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(${itemsPerRow}, 1fr);
    }
  `;

  if (loading) {
    return (
      <div className="container mx-auto px-4 flex items-center justify-center h-screen">
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#22d3ee"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  if (error.trim().length > 0) {
    return (
      <div className="container mx-auto px-4 my-6">
        <h1 className="text-cyan-400 font-light text-4xl lg:text-6xl mb-10">
          Accept our appologies!
        </h1>
        <p className="lg:text-3xl font-light">
          The page you were looking for does not exist. You might have misstyped
          the address or the page may have moved.
        </p>
        <Image
          className="mx-auto"
          src={pacMan}
          width={900}
          height={900}
          alt="Blue Pac-Man ghost sad"
        ></Image>
      </div>
    );
  }

  return (
    <ul className={gridCssClass}>
      {paginatedProducts.map((product) => {
        const { id } = product;

        return (
          <li key={id}>
            <ProductTile product={product}></ProductTile>
          </li>
        );
      })}
    </ul>
  );
};
