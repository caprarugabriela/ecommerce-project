import { useProducts } from '@/hooks';
import { ProductTile } from './ProductTile';
import { css } from '@emotion/css';
import { ThreeDots } from 'react-loader-spinner';

export const ProductGrid = () => {
  const { products, loading } = useProducts();
  const itemsPerRow = 2;

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

  return (
    <ul className={gridCssClass}>
      {products.map((product) => {
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
