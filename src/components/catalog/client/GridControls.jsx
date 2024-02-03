import { uiContext } from '@/contexts';
import { useContext } from 'react';

const buttonClasses =
  'flex justify-center items-center border-l border-zinc-200 w-20 h-20 transition-colors hover:bg-neutral-900 hover:text-white';

export const GridControls = () => {
  const { itemsPerRow, setItemsPerRow } = useContext(uiContext);

  return (
    <ul className="border  border-zinc-200 flex">
      <li>
        <button
          type="button"
          title="One per row"
          className={`${buttonClasses} ${
            itemsPerRow === '1' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('1');
          }}
        >
          1
        </button>
      </li>

      <li>
        <button
          type="button"
          title="Two per row"
          className={`${buttonClasses} ${
            itemsPerRow === '2' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('2');
          }}
        >
          2
        </button>
      </li>

      <li>
        <button
          type="button"
          title="Four per row"
          className={`${buttonClasses} ${
            itemsPerRow === '4' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('4');
          }}
        >
          4
        </button>
      </li>
    </ul>
  );
};
