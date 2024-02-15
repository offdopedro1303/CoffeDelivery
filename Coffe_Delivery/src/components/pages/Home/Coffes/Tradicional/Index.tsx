import {
  Characteristics,
  CharacteristicsStyled,
  CoffesStyled,
  ContentCard,
  QuantyControl,
} from "../style";
import Tradicional from "../../../../../assets/Img-Coffes/Expresso.svg";

import { Plus, Minus } from "phosphor-react";
import { useCart } from "../../../../../context/CartContext";

export function TradicionalCoffe() {
  const { coffesCount, handleAddCoffeToCart, handleRemoveCoffeToCart } =
    useCart();

  return (
    <CoffesStyled>
      <ContentCard>
        <img src={Tradicional} alt="" />
        <Characteristics>
          <CharacteristicsStyled>
            <h4>Tradicional</h4>
          </CharacteristicsStyled>
        </Characteristics>
        <h2>Expresso Tradicional</h2>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </ContentCard>
      <QuantyControl>
        <p>R$</p>
        <h6> 9,90</h6>
        <Minus
          size={22}
          color={"#8047F8"}
          onClick={() => handleRemoveCoffeToCart({ type: "traditional" })}
        />
        <p>{coffesCount.traditional}</p>
        <Plus
          size={22}
          alt=""
          color={"#8047F8"}
          onClick={() => handleAddCoffeToCart({ type: "traditional" })}
        />
      </QuantyControl>
    </CoffesStyled>
  );
}
