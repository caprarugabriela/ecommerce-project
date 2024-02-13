import { ThreeDots } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#22d3ee"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};
