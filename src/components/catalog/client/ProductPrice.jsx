export const ProductPrice = ({ price }) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return <>{formattedPrice}</>;
};
