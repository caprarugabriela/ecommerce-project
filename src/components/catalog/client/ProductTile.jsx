import Image from 'next/image';
import Link from 'next/link';

export const ProductTile = (props) => {
  const { product } = props;
  const { title, image: imageUrl, price, id } = product;
  const priceCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

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

        <h1 className="uppercase text-zinc-400 mb-2 mt-8 text-center text-sm flex flex-col items-center justify-between gap-4">
          <Link href={productUrl} title={title}>
            {title}
          </Link>
        </h1>
      </header>

      <section className="text-zinc-900 font-light">{priceCurrency}</section>

      <footer>{/* add to cart homework */}</footer>
    </article>
  );
};
