import Image from 'next/image';
import Link from 'next/link';
import { AddToCart } from '@/components/cart/client';
import { ProductPrice } from '@/components/catalog/client';

export const ProductTile = (props) => {
  const { product } = props;
  const { title, image: imageUrl, price, id } = product;
  const productUrl = `/products/${id}`;

  return (
    <article className="text-center mt-20">
      <header>
        <Link href={productUrl} title={title}>
          <Image
            width={200}
            height={200}
            src={imageUrl}
            alt={`Image for product ${title}`}
            // rezolvare bug consola legacy prop "objectFit"
            // am adaugat width si height si pt ca nu toate imaginile respectau 200x200 dimensiune
            style={{ objectFit: 'contain', width: '200px', height: '200px' }}
            className="inline"
          ></Image>
        </Link>

        {/* not the best thing in the world trebuie sa mai fac research cu ellipse ca imi da cu virgula */}
        <h1 className="uppercase text-zinc-400 mb-2 mt-8 text-center text-sm flex flex-col items-center justify-between gap-4">
          <Link href={productUrl} title={title}>
            {title.length > 20 ? `${title.substring(0, 20)}...` : title}
          </Link>
        </h1>
      </header>

      <section className="text-zinc-900 font-light">
        <ProductPrice price={price}></ProductPrice>
      </section>

      <footer>
        <AddToCart product={product}></AddToCart>
      </footer>
    </article>
  );
};
