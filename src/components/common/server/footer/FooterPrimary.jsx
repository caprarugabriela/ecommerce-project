import Link from 'next/link';
import { Data } from '../data/index.js';

export const FooterPrimary = () => {
  const { socialMedia, addresses } = Data;

  return (
    <section className="container px-4 lg:px-0 mx-auto flex flex-col gap-y-10 pt-24 pb-10 text-black">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-x-10 ">
        {addresses.map((address, index) => (
          <ul className="flex flex-col gap-3" key={index}>
            <h1 className="uppercase mb-6 font-bold text-center lg:text-left">
              {address.city}
            </h1>
            <li>
              <p>{address.address}</p>
              <p className=" hover:text-violet-400">
                <Link href={`tel:${address.phone}`}>{address.phone}</Link>
              </p>
              <p className=" hover:text-violet-400">
                <Link href={`mailto:${address.email}`}>{address.email}</Link>
              </p>
            </li>
          </ul>
        ))}

        <ul className="grid grid-cols-2 gap-3 lg:grid-cols-2 lg:gap-x-10">
          <h1 className="uppercase mb-6 font-bold text-center lg:text-left col-start-1 col-end-3">
            Follow us
          </h1>
          {socialMedia.map((socialMedia, index) => (
            <li className="text-base" key={index}>
              <Link
                href={socialMedia.url}
                title={socialMedia.title}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-400"
              >
                {socialMedia.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
