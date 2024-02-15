import { cartContext } from '@/contexts';
import { useContext } from 'react';
import { CartLineItem } from '.';
import { Spinner } from '@/components/ui/client';
import { EmptyCart } from './EmptyCart';

export const CartDisplay = () => {
  const { cartProducts, loading } = useContext(cartContext);

  // insert loader style as homework
  if (loading) {
    return (
      <>
        <Spinner></Spinner>
      </>
    );
  }

  return (
    <>
      {cartProducts.length === 0 ? (
        <EmptyCart></EmptyCart>
      ) : (
        <table>
          <thead className="border-b p-3 h-12">
            <tr>
              <th></th>
              <th></th>
              <th className="font-normal px-2 uppercase">Product</th>
              <th className="font-normal px-2 uppercase">Price</th>
              <th className="font-normal px-2 uppercase">Quantity</th>
              <th className="font-normal px-2 uppercase">Total</th>
            </tr>
          </thead>

          <tbody>
            {cartProducts.map((cartProduct) => {
              return (
                <CartLineItem
                  key={cartProduct.productId}
                  product={cartProduct}
                ></CartLineItem>
              );
            })}
          </tbody>
        </table>
      )}

      {/* am ascuns aceasta parte daca nu sunt produse in cos */}
      {cartProducts.length > 0 ? (
        <form className="flex gap-3 mt-2 items-center justify-center lg:justify-start">
          <input
            type="text"
            name="voucher"
            id="voucher"
            placeholder="Coupon Code"
            className="border border-zinc-400 py-2 px-3 flex "
          />
          <button
            type="submit"
            name="submitVoucher"
            id="submitVoucher"
            title="Apply Coupon"
            className="border-2 border-zinc-400 bg-transparent transition-colors hover:bg-black hover:text-white py-2 px-2 lg:px-8"
          >
            Apply Coupon
          </button>
        </form>
      ) : null}
    </>
  );
};
