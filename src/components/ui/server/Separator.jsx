import { BackToTop } from '../client/BackToTop.jsx';

export const Separator = ({ children }) => {
  return (
    <>
      <div className="border-t border-t-neutral-400 my-5">
        {children}
        <BackToTop />
      </div>
    </>
  );
};
