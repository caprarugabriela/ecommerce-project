import { uiContext } from '@/contexts';
import { useProducts } from '@/hooks';
import { useContext, useEffect } from 'react';

export const Pagination = () => {
  const { products, loading } = useProducts();
  const { pagination, setPagination } = useContext(uiContext);
  const { total, perPage, page } = pagination;

  useEffect(() => {
    setPagination({
      perPage,
      page,
      total: products.length,
    });
  }, [perPage, page, setPagination, products]);

  if (loading) {
    return <></>;
  }

  const pageCount = Math.ceil(total / perPage);

  return (
    <ul className="flex gap-2 items-center justify-center border border-none mb-20 mt-4 cursor-pointer">
      {Array(pageCount)
        .fill(' ')
        .map((_, index) => {
          const pageIndex = index + 1;

          return (
            <li key={index}>
              <button
                type="button"
                title={`Page ${pageIndex}`}
                className={` p-2 hover:bg-black hover:text-white transition-colors rounded ${
                  pageIndex === page ? 'bg-black text-white font-bold' : ''
                }`}
                onClick={() => {
                  setPagination({
                    ...pagination,
                    page: pageIndex,
                  });
                }}
              >
                {pageIndex}
              </button>
            </li>
          );
        })}
    </ul>
  );
};
