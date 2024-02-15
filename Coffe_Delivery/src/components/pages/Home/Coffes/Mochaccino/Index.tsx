import { Minus, Plus } from "phosphor-react";
import {
  CoffesStyled,
  ContentCard,
  Characteristics,
  CharacteristicsStyled,
  QuantyControl,
} from "../style";
import { useCart } from "../../../../../context/CartContext";

import Mochaccino from "../../../../../assets/Img-Coffes/Mochaccino.svg";

export function MochaccinoCoffe() {
  const { coffesCount, handleAddCoffeToCart, handleRemoveCoffeToCart } =
    useCart();

  return (
    <CoffesStyled>
      <ContentCard>
        <img src={Mochaccino} alt="" />
        <Characteristics>
          <CharacteristicsStyled>
            <h4>TRADICIONAL</h4>
          </CharacteristicsStyled>
          <CharacteristicsStyled>
            <h4>Com leite</h4>
          </CharacteristicsStyled>
        </Characteristics>
        <h2>Mocaccino</h2>
        <p>Café expresso com calda de chocolate, pouco leite e espuma</p>
      </ContentCard>
      <QuantyControl>
        <p>R$</p>
        <h6> 9,90</h6>
        <Minus
          size={22}
          color={"#8047F8"}
          onClick={() => handleRemoveCoffeToCart({ type: "mochaccino" })}
        />
        <p>{coffesCount.mochaccino}</p>
        <Plus
          size={22}
          alt=""
          color={"#8047F8"}
          onClick={() => () => handleAddCoffeToCart({ type: "mochaccino" })}
        />
      </QuantyControl>
    </CoffesStyled>
  );
}
