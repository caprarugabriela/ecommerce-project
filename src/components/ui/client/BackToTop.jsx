'use client';

import { IoIosArrowDropup } from 'react-icons/io';

export const BackToTop = () => {
  const scrollSmooth = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div
        className="flex items-center justify-center after:content-[''] after:h-px
            after:w-1/2 before:content-[''] before:h-px
            before:w-1/2"
      >
        <button
          title="Back to top"
          className="flex items-center justify-center text-gray-600 hover:text-cyan-600 absolute left-1/2 top-6/2 bg-[var(--gray)]"
          onClick={scrollSmooth}
        >
          <IoIosArrowDropup size="44"></IoIosArrowDropup>
        </button>
      </div>
    </>
  );
};
