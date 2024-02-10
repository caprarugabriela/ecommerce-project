import {
  CartControls,
  CartDisplay,
  CartTotals,
} from '@/components/cart/client';

export default function CartPage() {
  return (
    <div className="container px-4 mx-auto">
      <header className="flex justify-end">
        {/* homework add back to shop button
        ContinueShopping.jsx
      */}

        <CartControls></CartControls>
      </header>

      <section className="mt-16 grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <CartDisplay></CartDisplay>
        </div>

        <aside className="col-span-4">
          <CartTotals></CartTotals>

          <div>
            <button type="button" title="Proceed to Checkout">
              Proceed to Checkout
            </button>
          </div>
        </aside>
      </section>
    </div>
  );
}
