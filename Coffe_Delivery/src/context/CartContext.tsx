/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useContext, useState } from "react";
//import Tradicional from "../assets/Img-Coffes/Expresso.svg";

export type CoffeTypes =
  | "traditional"
  | "express"
  | "cremoso"
  | "arabe"
  | "cafeComLeite"
  | "cafeGelado"
  | "capuccino"
  | "chocolateQuente"
  | "cubano"
  | "havaiano"
  | "irlandes"
  | "latte"
  | "macchiato"
  | "mocaccino";

/* export type ListItensType = "img" | "coffeName" | "tag" | "descripition";
/*  | "traditionalCoffe"
  | "expressCoffe"
  | "cremosoCoffe" */

interface ICartContext {
  coffesCount: {
    traditional: number;
    express: number;
    cremoso: number;
    arabe: number;
    cafeComLeite: number;
    cafeGelado: number;
    capuccino: number;
    chocolateQuente: number;
    cubano: number;
    havaiano: number;
    irlandes: number;
    latte: number;
    macchiato: number;
    mocaccino: number;
  };
  /* itenToBuyList: {
    img: string | undefined;
    coffeName: string | undefined;
    tag: string | undefined;
    descripition: string | undefined;
  }; */
  totalSumItens: number;
  handleAddCoffeToCart: ({ type }: { type: CoffeTypes }) => void;
  handleRemoveCoffeToCart: ({ type }: { type: CoffeTypes }) => void;
  imgCoffe: string;
  coffeName: {
    traditional: "Tradicional";
    express: "Expresso Americano";
    cremoso: "Expresso Cremoso";
    arabe: "Árabe";
    cafeComLeite: "Café com Leite";
    cafeGelado: "Café Gelado";
    capuccino: "Capuccino";
    chocolateQuente: "Chocolate Quente";
    cubano: "Cubano";
    havaiano: "Havaiano";
    irlandes: "Irlândes";
    latte: "Latte";
    macchiato: "Macchiato";
    mocaccino: "Mochaccino";
  };
  descripitionCoffe: string;
  setImgCoffe: (e: any) => void;
  setCoffeName: (e: any) => void;
  setDescripitionCoffe: (e: any) => void;
}

/* interface IBuyList {
  itenToBuyList: {
    coffeName: string;
    tag: string;
    descripition: string;
  };
} */

const CartContext = createContext<ICartContext | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = (): ICartContext => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("Provider missing!");
  }

  return context;
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [coffesCount, setCoffesCount] = useState<{
    traditional: number;
    express: number;
    cremoso: number;
    arabe: number;
    cafeComLeite: number;
    cafeGelado: number;
    capuccino: number;
    chocolateQuente: number;
    cubano: number;
    havaiano: number;
    irlandes: number;
    latte: number;
    macchiato: number;
    mocaccino: number;
  }>({
    traditional: 0,
    express: 0,
    cremoso: 0,
    arabe: 0,
    cafeComLeite: 0,
    cafeGelado: 0,
    capuccino: 0,
    chocolateQuente: 0,
    cubano: 0,
    havaiano: 0,
    irlandes: 0,
    latte: 0,
    macchiato: 0,
    mocaccino: 0,
  });

  /*   const [itenToBuyList, setItenToBuyList] = useState<
    [
      {
        img: string | undefined;
        coffeName: string | undefined;
        tag: string | undefined;
        descripition: string | undefined;
      }
    ]
  >([
    {
      img: "string",
      coffeName: "string",
      tag: "string",
      descripition: "string",
    },
  ]); */

  const [imgCoffe, setImgCoffe] = useState(" ");
  const [coffeName, setCoffeName] = useState<{
    traditional: string;
    express: string;
    cremoso: string;
    arabe: string;
    cafeComLeite: string;
    cafeGelado: string;
    capuccino: string;
    chocolateQuente: string;
    cubano: string;
    havaiano: string;
    irlandes: string;
    latte: string;
    macchiato: string;
    mocaccino: string;
  }>({
    traditional: "Tradicional",
    express: "Expresso Americano",
    cremoso: "Expresso Cremoso",
    arabe: "Árabe",
    cafeComLeite: "Café com Leite",
    cafeGelado: "Café Gelado",
    capuccino: "Capuccino",
    chocolateQuente: "Chocolate Quente",
    cubano: "Cubano",
    havaiano: "Havaiano",
    irlandes: "Irlândes",
    latte: "Latte",
    macchiato: "Macchiato",
    mocaccino: "Mochaccino",
  });
  const [descripitionCoffe, setDescripitionCoffe] = useState("");

  // Função Responsavel por adicionar o numero de Itens no carrinho
  function handleAddCoffeToCart({ type }: { type: CoffeTypes }) {
    setCoffesCount((prevState) => {
      return { ...prevState, [type]: prevState[type] + 1 };
    });

    setCoffeName((prevNames) => {
      return { ...prevNames, [type]: getTypeName(type) };
    });

    console.log(coffeName);
  }

  // Função auxiliar para obter o nome correspondente ao tipo de café
  function getTypeName(type: CoffeTypes): string {
    switch (type) {
      case "traditional":
        return "Café Tradicional";
      case "express":
        return "Expresso Americano";
      case "cremoso":
        return "Expresso Cremoso";
      case "cafeGelado":
        return "Café Gelado";
      case "cafeComLeite":
        return "Café com Leite";
      case "latte":
        return "Latte";
      case "capuccino":
        return "Capuccino";
      case "mocaccino":
        return "Mocaccino";
      case "chocolateQuente":
        return "Chocolate Quente";
      case "cubano":
        return "Cubano";
      case "havaiano":
        return "Havaiano";
      case "arabe":
        return "Árabe";
      case "irlandes":
        return "Irlândes";
      // Adicione casos para outros tipos de café, se necessário
      default:
        return ""; // Padrão, pode ser ajustado conforme necessário
    }
  }

  /*  itenToBuyList.map((item) => {
       return (
         <div>
           <TradicionalCoffe />
         </div>
       );
     }) */

  function handleRemoveCoffeToCart({ type }: { type: CoffeTypes }) {
    setCoffesCount((prevState) => {
      return { ...prevState, [type]: prevState[type] - 1 };
    });
  }

  const totalSumItens =
    coffesCount.express +
    coffesCount.traditional +
    coffesCount.cremoso +
    coffesCount.arabe +
    coffesCount.cafeComLeite +
    coffesCount.cafeGelado +
    coffesCount.capuccino +
    coffesCount.chocolateQuente +
    coffesCount.cubano +
    coffesCount.havaiano +
    coffesCount.irlandes +
    coffesCount.latte +
    coffesCount.macchiato +
    coffesCount.mocaccino;

  return (
    <CartContext.Provider
      value={{
        coffesCount,
        imgCoffe,
        coffeName,
        descripitionCoffe,
        setImgCoffe,
        setCoffeName,
        setDescripitionCoffe,
        handleAddCoffeToCart,
        handleRemoveCoffeToCart,
        totalSumItens,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
