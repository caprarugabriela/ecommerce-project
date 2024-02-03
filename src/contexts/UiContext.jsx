import { createContext } from 'react';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

export const uiContext = createContext();

export const UiContext = ({ children }) => {
  // am mutat  din GriControls
  // useLocalStorage -> wrapper pt hookul de state
  // o sa scrie si in localstorage (pe langa memorie)
  const [perRow, setPerRow] = useLocalStorage('perRow', '2');
  const [itemsPerRow, setItemsPerRow] = useState('');

  useEffect(() => {
    setItemsPerRow(perRow);
  }, [perRow]);

  return (
    <uiContext.Provider
      value={{
        itemsPerRow,
        setItemsPerRow: setPerRow,
      }}
    >
      {children}
    </uiContext.Provider>
  );
};