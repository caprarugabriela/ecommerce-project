import { uiContext } from '@/contexts';
import { useContext } from 'react';
import { BsFillCircleFill } from 'react-icons/bs';

const buttonClasses =
  'flex justify-center items-center border-l border-zinc-200 w-20 h-20 transition-colors hover:bg-neutral-900 hover:text-white gap-2 flex-col';

export const GridControls = () => {
  const { itemsPerRow, setItemsPerRow } = useContext(uiContext);

  return (
    <ul className="border border-zinc-200 hidden lg:flex">
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
          <BsFillCircleFill />
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
          <BsFillCircleFill />
          <BsFillCircleFill />
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
          <div className=" grid grid-cols-2 gap-2">
            <BsFillCircleFill />
            <BsFillCircleFill />
            <BsFillCircleFill />
            <BsFillCircleFill />
          </div>
        </button>
      </li>
    </ul>
  );
};
