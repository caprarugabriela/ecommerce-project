import Link from 'next/link';
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import { CgClose } from 'react-icons/cg';

export const OffCanvasMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        title="Menu"
        type="button"
        onClick={() => {
          setOpen(!open);
        }}
        className="relative z-10 hover:text-cyan-400"
      >
        {open ? <CgClose size="32"></CgClose> : <CgMenu size="32"></CgMenu>}
      </button>

      <nav
        className={`${
          open ? 'translate-y-full' : ''
        } bg-neutral-900 transition-transform transform-gpu text-white w-dvw h-dvh fixed left-0 -top-full z-0 lg:w-1/3 center center`}
      >
        <ul className="flex lg:flex-col lg:justify-center lg:items-center gap-y-5 h-screen text-2xl uppercase">
          <li className=" hover:text-cyan-400">
            <Link href="/" title="Home">
              Home
            </Link>
          </li>

          <li className=" hover:text-cyan-400">
            <Link href="/contact" title="Contact">
              Contact
            </Link>
          </li>

          <li className=" hover:text-cyan-400">
            <Link href="/about-us" title="About us">
              About us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
