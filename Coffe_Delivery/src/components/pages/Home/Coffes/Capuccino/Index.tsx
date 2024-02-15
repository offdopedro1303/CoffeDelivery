import Capuccino from "../../../../../assets/Img-Coffes/Americano.svg";

import { useCart } from "../../../../../context/CartContext";
import {
  Characteristics,
  CharacteristicsStyled,
  CoffesStyled,
  ContentCard,
  QuantyControl,
} from "../style";

import { Minus, Plus } from "phosphor-react";

export function CapuccinoCoffe() {
  const { coffesCount, handleAddCoffeToCart, handleRemoveCoffeToCart } =
    useCart();

  return (
    <CoffesStyled>
      <ContentCard>
        <img src={Capuccino} alt="" />
        <Characteristics>
          <CharacteristicsStyled>
            <h4>TRADICIONAL</h4>
          </CharacteristicsStyled>
          <CharacteristicsStyled>
            <h4>Com leite</h4>
          </CharacteristicsStyled>
        </Characteristics>
        <h2>Capuccino</h2>
        <p>Bebida com canela feita de doses iguais de café, leite e espuma</p>
      </ContentCard>
      <QuantyControl>
        <p>R$</p>
        <h6> 9,90</h6>
        <Minus
          size={22}
          color={"#8047F8"}
          onClick={() => handleRemoveCoffeToCart({ type: "capuccino" })}
        />
        <p>{coffesCount.capuccino}</p>
        <Plus
          size={22}
          alt=""
          color={"#8047F8"}
          onClick={() => handleAddCoffeToCart({ type: "capuccino" })}
        />
      </QuantyControl>
    </CoffesStyled>
  );
}
