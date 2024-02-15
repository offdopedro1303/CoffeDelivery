//import { useBuyListContext } from "../../../../context/BuyListContext";
import { useCart } from "../../../../context/CartContext";
import { ItemOfBuyList } from "./style";

export function BuyList() {
  const { coffeName, coffesCount } = useCart();

  const CoffesNamesBuyList = [
    coffeName.traditional,
    coffeName.express,
    coffeName.cremoso,
    coffeName.arabe,
    coffeName.cafeComLeite,
    coffeName.cafeGelado,
    coffeName.capuccino,
    coffeName.chocolateQuente,
    coffeName.cubano,
    coffeName.havaiano,
    coffeName.irlandes,
    coffeName.latte,
    coffeName.macchiato,
    coffeName.mocaccino,
  ];
  console.log(coffeName);
  return (
    <div>
      <ItemOfBuyList>
        <h3>
          {coffesCount.traditional >= 1
            ? CoffesNamesBuyList[0]
            : coffesCount.express >= 1
            ? CoffesNamesBuyList[1]
            : coffesCount.cremoso >= 1
            ? CoffesNamesBuyList[2]
            : coffesCount.arabe >= 1
            ? CoffesNamesBuyList[3]
            : coffesCount.cafeComLeite >= 1
            ? CoffesNamesBuyList[4]
            : coffesCount.cafeGelado >= 1
            ? CoffesNamesBuyList[5]
            : coffesCount.capuccino >= 1
            ? CoffesNamesBuyList[6]
            : coffesCount.chocolateQuente >= 1
            ? CoffesNamesBuyList[7]
            : coffesCount.cubano >= 1
            ? CoffesNamesBuyList[8]
            : coffesCount.havaiano >= 1
            ? CoffesNamesBuyList[9]
            : coffesCount.irlandes >= 1
            ? CoffesNamesBuyList[10]
            : coffesCount.latte >= 1
            ? CoffesNamesBuyList[11]
            : coffesCount.macchiato >= 1
            ? CoffesNamesBuyList[12]
            : coffesCount.mocaccino >= 1
            ? CoffesNamesBuyList[13]
            : "Nenhum Produto Selecionado !"}
        </h3>
      </ItemOfBuyList>
    </div>
  );
}
