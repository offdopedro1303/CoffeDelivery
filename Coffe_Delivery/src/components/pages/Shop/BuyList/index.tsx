//import { useBuyListContext } from "../../../../context/BuyListContext";
import { NavLink } from "react-router-dom";
import { useCart } from "../../../../context/CartContext";
import { CardInListBuy } from "../components/CardInListBuy";
import {
  CardSumTotal,
  FinishedButton,
  FinishedContentButton,
  ItemOfBuyList,
} from "./style";

export function BuyList() {
  const { coffesInListBuy, sumTotalCoffes, coffesCount } = useCart();
  console.log(coffesInListBuy);
  return (
    <div>
      <ItemOfBuyList>
        {coffesInListBuy.map((itemList, index) => {
          if (itemList.quantity >= 0) {
            return (
              <CardInListBuy
                id={index}
                key={index}
                coffeImg={itemList.coffeImg}
                coffeName={itemList.coffeName}
                quantityCoffes={itemList.quantity + 1}
                valueCoffe={itemList.coffeValue}
              />
            );
          }
        })}
      </ItemOfBuyList>
      <CardSumTotal>
        <div>
          <p>Total de itens</p>
          <p>Entrega</p>
          <strong>Total</strong>
        </div>
        <div>
          <p>{coffesCount}</p>
          <p>3,50</p>
          <p>R$ {sumTotalCoffes}</p>
        </div>
      </CardSumTotal>
      <FinishedButton>
        <NavLink to={"/Success"}>
          <FinishedContentButton>Finalizar Compra</FinishedContentButton>
        </NavLink>
      </FinishedButton>
    </div>
  );
}
{
  /*
  
*/
}
