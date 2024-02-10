import { cartContext } from '@/contexts';
import { useContext } from 'react';
import { CartLineItem } from '.';

export const CartDisplay = () => {
  const { cartProducts, loading } = useContext(cartContext);

  // insert loader style as homework
  if (loading) {
    //  please add spinner
    return <>...loading</>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
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
  );
};
