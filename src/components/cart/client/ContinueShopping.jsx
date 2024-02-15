import Link from 'next/link';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

export const ContinueShopping = () => {
  return (
    <div>
      <Link
        href="/products"
        title="Back to Shop"
        className="border border-zinc-200 transition-colors hover:bg-neutral-900 hover:text-white p-7 uppercase text-violet-400 flex items-center"
      >
        <HiOutlineArrowNarrowLeft size="30"></HiOutlineArrowNarrowLeft>
        <span className="pl-1 lg:pl-8 hover:text-white">Back to Shop</span>
      </Link>
    </div>
  );
};
