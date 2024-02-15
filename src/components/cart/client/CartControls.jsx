import { cartContext } from '@/contexts';
import Link from 'next/link';
import { ImCart } from 'react-icons/im';
import { useContext } from 'react';
import { useProducts } from '@/hooks';

export const CartControls = () => {
  const obj = useContext(cartContext);
  const { products } = useProducts();
  const { cartProducts } = useContext(cartContext);
  const sumProducts = cartProducts.reduce((sum, { quantity, productId }) => {
    products.find((product) => {
      return productId === product.id;
    });

    sum += quantity;

    return sum;
  }, 0);

  return (
    <ul className="border border-zinc-200 transition-colors hover:bg-neutral-900 hover:text-white">
      <li>
        <Link
          href="/cart"
          className="w-20 aspect-square flex justify-center items-center"
        >
          <span className="relative">
            <ImCart size="36" />
            <span className="absolute block w-5 bg-violet-400 text-white -top-4 -right-4 rounded-full text-sm text-center">
              {sumProducts}
            </span>
          </span>
        </Link>
      </li>
    </ul>
  );
};
