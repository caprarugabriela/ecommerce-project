import { ProductPrice } from '@/components/catalog/client';
import { Spinner } from '@/components/ui/client';
import { StarRating } from '@/components/ui/server';
import { cartContext } from '@/contexts';
import { useProduct } from '@/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { LiaTrashAlt } from 'react-icons/lia';
import { baseUrl } from '@/index';

export const CartLineItem = ({ product }) => {
  const { quantity: initialQuantity, productId } = product;
  const [quantity, setQuantity] = useState(initialQuantity);
  const { product: fullProduct, loading } = useProduct(productId);
  const productUrl = `/products/${productId}`;
  const { cartProducts, setCartProducts, cartId } = useContext(cartContext);

  if (loading) {
    return (
      <tr>
        <td>
          <Spinner></Spinner>
        </td>
      </tr>
    );
  }

  if (!fullProduct) {
    return (
      <tr>
        <td></td>
      </tr>
    );
  }

  const { title, image: imageUrl, rating, price } = fullProduct;
  const { rate, count } = rating;

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) =>
      prevQuantity > 1 ? prevQuantity - 1 : prevQuantity,
    );
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const removeAllFromCart = () => {
    fetch(`${baseUrl}/carts/${cartId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((_) => {
        const updatedCartProducts = cartProducts.filter(
          (product) => product.productId !== productId,
        );
        setCartProducts(updatedCartProducts);
      })
      .catch((error) => {
        console.error('Error removing all products from cart:', error);
      });
  };

  return (
    <>
      <tr className="border-b">
        <td>
          <button className="remove-button" onClick={removeAllFromCart}>
            <CgClose size="22" />
          </button>
        </td>

        <td className="py-4 px-2 flex ">
          <Link href={productUrl}>
            <Image
              width={100}
              height={100}
              src={imageUrl}
              alt={`Image for product ${title}`}
              style={{ objectFit: 'contain', width: '100px', height: '100px' }}
              className="inline"
            ></Image>
          </Link>
        </td>

        <td>
          <Link href={productUrl}>
            <h1 className="text-black font-medium">{title}</h1>
          </Link>

          <StarRating rate={rate} count={count}></StarRating>
        </td>

        <td className="text-black font-normal">
          <ProductPrice price={price}></ProductPrice>
        </td>

        <td style={{ height: '100px' }} className="text-center px-2">
          <div className="border border-black flex items-center justify-center gap-1 text-black">
            {quantity === 1 ? (
              <span className="cursor-pointer" onClick={removeAllFromCart}>
                <LiaTrashAlt />
              </span>
            ) : (
              <button
                onClick={decreaseQuantity}
                aria-label="Decrease quantity"
                className="text-xl font-semibold hover:bg-gray-200 p-2"
              >
                -
              </button>
            )}

            <span className="px-4">{quantity}</span>
            <button
              onClick={increaseQuantity}
              aria-label="Increase quantity"
              className="text-xl font-semibold hover:bg-gray-200 p-2"
            >
              +
            </button>
          </div>
        </td>

        <td className="text-black font-normal text-center">{quantity}</td>

        <td className="text-black font-normal text-center">
          <ProductPrice price={price * quantity}></ProductPrice>
        </td>
      </tr>
    </>
  );
};
