import Americano from "../../../../../assets/Img-Coffes/Americano.svg";

import { useCart } from "../../../../../context/CartContext";
import {
  Characteristics,
  CharacteristicsStyled,
  CoffesStyled,
  ContentCard,
  QuantyControl,
} from "../style";

import { Minus, Plus } from "phosphor-react";

export function AmericanoCoffe() {
  const { coffesCount, handleAddCoffeToCart, handleRemoveCoffeToCart } =
    useCart();

  return (
    <div>
      <CoffesStyled>
        <ContentCard>
          <img src={Americano} alt="" />
          <Characteristics>
            <CharacteristicsStyled>
              <h4>Tradicional</h4>
            </CharacteristicsStyled>
          </Characteristics>
          <h2>Expresso Americano</h2>
          <p>Expresso diluído, menos intenso que o tradicional</p>
        </ContentCard>
        <QuantyControl>
          <p>R$</p>
          <h6> 9,90</h6>
          <Minus
            size={22}
            color={"#8047F8"}
            onClick={() => handleRemoveCoffeToCart({ type: "express" })}
          />
          <p>{coffesCount.express}</p>
          <Plus
            size={22}
            alt=""
            color={"#8047F8"}
            onClick={() => handleAddCoffeToCart({ type: "express" })}
          />
        </QuantyControl>
      </CoffesStyled>
    </div>
  );
}
