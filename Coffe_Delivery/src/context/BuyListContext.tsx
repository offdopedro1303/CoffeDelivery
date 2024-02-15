/* import { createContext, useContext, useState } from "react";
import { CoffeTypes } from "./CartContext";
//import Tradicional from "../assets/Img-Coffes/Expresso.svg";

interface IBuyListContext {
  itemCountList: string[]; // Assuming it's an array of strings (coffee names)
  setItemOfList: React.Dispatch<React.SetStateAction<string[]>>;
}

const BuyListContext = createContext<IBuyListContext | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useBuyListContext = (): IBuyListContext => {
  const context = useContext(BuyListContext);

  if (!context) {
    throw new Error("Provider missing!");
  }

  return context;
};

export function BuyListProvider({ children }) {
  const [itemCountList, setItemOfList] = useState([
    "Nenhum Produto Selecionado !",
  ]);

  function handleAddCoffeToListBuy(coffeName: string) {
    setItemOfList((prevList) => [...prevList, coffeName]);
  }

  return (
    <BuyListContext.Provider
      value={{
        itemCountList,
        setItemOfList,
      }}
    >
      {children}
    </BuyListContext.Provider>
  );
} */
