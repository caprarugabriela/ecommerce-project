import emptyCart from '../../../../public/images/empty-cart_2762885.png';
import Image from 'next/image';
import Link from 'next/link';

export const EmptyCart = () => {
  return (
    <div className="text-center my-4 text-black">
      <h1 className="text-2xl flex justify-center">Your cart is empty</h1>
      <p> You have no items in your shopping cart. Lets buy something!</p>
      <Image
        className="mx-auto"
        src={emptyCart}
        width={400}
        height={400}
        alt="Empty cart"
      ></Image>
      {/* aici am vrut sa stilez diferit acel continueshopping, not the best idea, daca ai niste recomandari pt cazuri de genul as fi super super recunoscatoare */}
      <div className="w-auto h-auto p-3">
        <Link
          href="/"
          title="Back to Shop"
          className="border p-3 border-zinc-200 transition-colors bg-violet-100 hover:bg-gray-200 hover:text-black uppercase text-violet-400 font-semibold"
        >
          <span>Shop now</span>
        </Link>
      </div>
    </div>
  );
};
