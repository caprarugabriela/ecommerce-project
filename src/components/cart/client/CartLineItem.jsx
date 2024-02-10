import { useProduct } from '@/hooks';

export const CartLineItem = ({ product }) => {
  const { quantity, productId } = product;
  const { product: fullProduct, loading } = useProduct(productId);

  if (loading) {
    return (
      <tr>
        <td>...loading</td>
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

  const { title, price } = fullProduct;

  return (
    <tr>
      <td>{/* add a remove all button */}</td>

      <td>{/* insert image */}</td>

      <td>
        <h1>{title}</h1>
      </td>

      <td>{price}</td>

      <td>{quantity}</td>

      <td>{price * quantity}</td>
    </tr>
  );
};
