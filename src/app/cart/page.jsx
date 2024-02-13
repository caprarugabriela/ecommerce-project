import {
  CartControls,
  CartDisplay,
  CartTotals,
  ContinueShopping,
} from '@/components/cart/client';

export default function CartPage() {
  return (
    <div className="container px-4 mx-auto">
      <header className="flex justify-between">
        <ContinueShopping></ContinueShopping>
        <CartControls></CartControls>
      </header>

      <section className="mt-16 grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 grid gap-y-12">
          <CartDisplay></CartDisplay>
        </div>

        <aside className="col-span-4">
          <CartTotals></CartTotals>

          <div>
            <button
              type="button"
              title="Proceed to Checkout"
              className="bg-black text-white transition-colors hover:bg-cyan-400 uppercase text-center font-semibold w-full py-4 mb-10"
            >
              Proceed to Checkout
            </button>
          </div>
        </aside>
      </section>
    </div>
  );
}
