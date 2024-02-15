import Link from 'next/link';
import { OffCanvasMenu } from '../client';
import { FaHome } from 'react-icons/fa';
import { socialLinks } from '@/components/common/server/data/social.js';

// consider jsx is a normal data type
const jsxLogo = (
  <span className="w-4 m-4">
    <FaHome size={30}></FaHome>
  </span>
);

export const Header = () => {
  return (
    <div className="bg-neutral-900 text-white flex lg:flex-col justify-between items-center h-full p-4 ">
      {/* forced example */}
      <Link href="/" className="relative z-10 hover:text-violet-400">
        {jsxLogo}
      </Link>

      <OffCanvasMenu></OffCanvasMenu>

      <ul className="hidden lg:flex flex-col justify-between items-center gap-6 z-10">
        {socialLinks.map((social, index) => (
          <li key={index} className="hover:text-violet-400">
            <a
              href={social.href}
              title={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
