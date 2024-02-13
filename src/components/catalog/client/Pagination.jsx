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
    <>
      <ul className="flex gap-2 items-center justify-center border border-none mb-10 mt-10 cursor-pointer">
        {Array(pageCount)
          .fill(' ')
          .map((_, index) => {
            const pageIndex = index + 1;

            return (
              <li key={index}>
                <button
                  type="button"
                  title={`Page ${pageIndex}`}
                  className={`p-2 hover:bg-black hover:text-white transition-colors rounded ${
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

      <div className="flex justify-center items-center mb-4">
        <h1>Show products per page:</h1>
        <button
          className={`p-2 mx-2 ${
            perPage === 5 ? 'bg-black text-white font-bold' : 'bg-gray-200'
          }`}
          onClick={() => {
            setPagination({
              ...pagination,
              perPage: 5,
              page: 1,
            });
          }}
        >
          5
        </button>
        <button
          className={`p-2 mx-2 ${
            perPage === 10 ? 'bg-black text-white font-bold' : 'bg-gray-200'
          }`}
          onClick={() => {
            setPagination({
              ...pagination,
              perPage: 10,
              page: 1,
            });
          }}
        >
          10
        </button>
        <button
          className={`p-2 mx-2 ${
            perPage === 20 ? 'bg-black text-white font-bold' : 'bg-gray-200'
          }`}
          onClick={() => {
            setPagination({
              ...pagination,
              perPage: 20,
              page: 1,
            });
          }}
        >
          20
        </button>
      </div>
    </>
  );
};
