import { CartControls, ContinueShopping } from '@/components/cart/client';
import { ProductPrice } from '@/components/catalog/client';
import { StarRating } from '@/components/ui/server';
import { baseUrl } from '@/index';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const getProduct = async (productId) => {
  return fetch(`${baseUrl}/products/${productId}`)
    .then((response) => {
      return response.json();
    })
    .catch(() => {
      redirect('/not-found');
    });
};

export default async function ProductPage({ params }) {
  const productId = params.pid;
  const product = await getProduct(productId);
  const { title, image: imageUrl, price, id, rating, description } = product;
  const { rate, count } = rating;
  const productUrl = `/products/${id}`;

  return (
    <div className="container px-4 mx-auto">
      <header className="flex justify-between">
        <ContinueShopping></ContinueShopping>
        <CartControls></CartControls>
      </header>

      <div className="lg:grid lg: grid-cols-2 mt-16">
        <section>
          <Image
            src={imageUrl}
            width={700}
            height={700}
            style={{ objectFit: 'contain', width: '700px', height: '700px' }}
            alt={`Image for product ${title}`}
          ></Image>
        </section>

        <section className="lg:text-left">
          <h1 className="text-2xl uppercase font-medium text-zinc-900 text-center lg:text-left mt-8">
            <Link href={productUrl} title={title}>
              {title}
            </Link>
          </h1>

          <StarRating rate={rate} count={count}></StarRating>

          <div className="mt-12 text-zinc-900 text-justify">{description}</div>

          <div className="text-3xl text-zinc-900 font-bold mt-12 flex items-center justify-center lg:justify-start">
            <ProductPrice price={price}></ProductPrice>
          </div>

          {/* WIP - to be added functionality to the button */}
          <div className="lg:justify-start flex justify-center items-center my-16">
            <button className="bg-black text-white uppercase font-medium text-sm py-3 px-6 hover:bg-cyan-400 transition-colors rounded lg:justify-start">
              Add to cart
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
