import { useProducts } from '@/hooks';
import { ProductTile } from './ProductTile';
import { css } from '@emotion/css';
import { ThreeDots } from 'react-loader-spinner';
import { useContext, useEffect, useState } from 'react';
import { uiContext } from '@/contexts';

export const ProductGrid = () => {
  const { itemsPerRow } = useContext(uiContext);
  const { products, loading, error } = useProducts();
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const [perPage, setPerPage] = useState(8);
  const [page, setPage] = useState(1);

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
    return <div className="container mx-auto px-4">{error}</div>;
  }

  const pageCount = Math.ceil(products.length / perPage);

  return (
    <>
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

      <ul className="flex gap-2">
        {Array(pageCount)
          .fill(' ')
          .map((_, index) => {
            const pageIndex = index + 1;

            return (
              <li key={index}>
                <button
                  type="button"
                  title={`Page ${pageIndex}`}
                  className={`border border-zinc-200 p-2 hover:bg-black hover:text-white transition-colors ${
                    pageIndex === page ? 'bg-black text-white' : ''
                  }`}
                  onClick={() => {
                    setPage(pageIndex);
                  }}
                >
                  {pageIndex}
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
};
