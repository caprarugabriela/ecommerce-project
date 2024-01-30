import Link from 'next/link';
import { OffCanvasMenu } from '../client';
import { FaHome } from 'react-icons/fa';
import { CgFacebook } from 'react-icons/cg';
import { FaTiktok } from 'react-icons/fa';
import { TiSocialGooglePlus } from 'react-icons/ti';

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
      <Link href="/" className="relative z-10 hover:text-cyan-400">
        {jsxLogo}
      </Link>

      <OffCanvasMenu></OffCanvasMenu>

      <ul className="hidden lg:flex flex-col justify-between items-center gap-6 z-10">
        <li className=" hover:text-cyan-400">
          <Link
            href="https://www.facebook.com/"
            title="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CgFacebook size="20"></CgFacebook>
          </Link>
        </li>

        <li className="hover:text-cyan-400">
          <Link
            href="https://www.tiktok.com/"
            title="TikTok"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok size="20"></FaTiktok>
          </Link>
        </li>

        <li className="hover:text-cyan-400">
          <Link
            href="https://www.google.com/"
            title="Google"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialGooglePlus size="20"></TiSocialGooglePlus>
          </Link>
        </li>
      </ul>
    </div>
  );
};
