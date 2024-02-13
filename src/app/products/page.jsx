import { CartControls } from '@/components/cart/client';
import {
  GridControls,
  Pagination,
  ProductGrid,
} from '@/components/catalog/client';

export default function Home() {
  return (
    <div className="container px-4 mx-auto">
      <header className="flex justify-end">
        <GridControls></GridControls>
        <CartControls></CartControls>
      </header>

      <section>
        <Pagination></Pagination>

        <ProductGrid></ProductGrid>

        <Pagination></Pagination>
      </section>

      <section></section>
    </div>
  );
}
