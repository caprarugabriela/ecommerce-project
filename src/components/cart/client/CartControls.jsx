import Link from 'next/link';
import { ImCart } from 'react-icons/im';

export const CartControls = () => {
  return (
    <ul className="border border-zinc-200 transition-colors hover:bg-neutral-900 hover:text-white">
      <li>
        <Link
          href="/cart"
          className="w-20 aspect-square flex justify-center items-center"
        >
          <span className="relative">
            <ImCart size="36" />
            <span className="absolute block w-5 bg-cyan-400 text-white -top-4 -right-4 rounded-full text-sm text-center">
              1
            </span>
          </span>
        </Link>
      </li>
    </ul>
  );
};
