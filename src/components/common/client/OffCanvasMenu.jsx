import Link from 'next/link';
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';

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
        className="relative z-10"
      >
        <CgMenu size={32}></CgMenu>
      </button>

      <nav
        className={`${
          open ? 'translate-y-full' : ''
        } bg-neutral-900 transition-transform transform-gpu text-white w-dvw h-dvh fixed left-0 -top-full z-0 lg:w-1/3`}
      >
        <ul>
          <li>
            <Link href="/" title="Home">
              Home
            </Link>
          </li>

          <li>
            <Link href="/contact" title="Contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
