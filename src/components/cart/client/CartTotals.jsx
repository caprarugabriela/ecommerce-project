import { ProductPrice } from '@/components/catalog/client';
import { Spinner } from '@/components/ui/client';
import { cartContext } from '@/contexts';
import { useProducts } from '@/hooks';
import { useContext, useState } from 'react';

export const CartTotals = () => {
  const { cartProducts } = useContext(cartContext);
  const { products, loading } = useProducts();
  const shippingTax = 49.0;
  const [selectedShippingOption, setSelectedShippingOption] =
    useState('standard');

  if (loading) {
    return (
      <>
        <Spinner></Spinner>
      </>
    );
  }

  const total = cartProducts.reduce((total, { quantity, productId }) => {
    const product = products.find((product) => {
      return productId === product.id;
    });
    const { price } = product;
    total += quantity * price;

    return total;
  }, 0);

  const finalPrice =
    selectedShippingOption === 'express' ? total + shippingTax : total;
  return (
    <aside className="lg:col-span-4">
      <h1 className=" bg-black text-white uppercase font-medium p-3">
        Cart Totals
      </h1>

      <div className="border-b py-3 text-black">
        Subtotal:&nbsp;
        <ProductPrice price={total}></ProductPrice>
      </div>

      <div className="border-b py-3 text-black">
        <form className="flex gap-4">
          <label>Shipping:</label>

          <div className="flex flex-col gap-4 items-start justify-start">
            <div className="flex gap-1">
              <input
                type="radio"
                id="standard"
                value="standard"
                name="shipping"
                checked={selectedShippingOption === 'standard'}
                onChange={() => setSelectedShippingOption('standard')}
                className=" accent-cyan-600 focus:accent-cyan-600"
              ></input>
              <label htmlFor="standard">Standard (Free)</label>
            </div>

            <div className="flex gap-1">
              <input
                type="radio"
                id="express"
                value="express"
                name="shipping"
                checked={selectedShippingOption === 'express'}
                onChange={() => setSelectedShippingOption('express')}
                className="accent-cyan-600 focus:accent-cyan-600"
              ></input>
              <label htmlFor="express">Express ($49.00)</label>
            </div>
          </div>
        </form>
      </div>

      <div className="border-b py-3 text-black">
        Total:&nbsp;
        <ProductPrice price={finalPrice}></ProductPrice>
      </div>
    </aside>
  );
};
