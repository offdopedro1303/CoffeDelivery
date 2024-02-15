import { Minus, Plus } from "phosphor-react";
import {
  CoffesStyled,
  ContentCard,
  Characteristics,
  CharacteristicsStyled,
  QuantyControl,
} from "../style";
import Latte from "../../../../../assets/Img-Coffes/Latte.svg";
import { useCart } from "../../../../../context/CartContext";

export function LatteCoffe() {
  const { coffesCount, handleAddCoffeToCart, handleRemoveCoffeToCart } =
    useCart();

  return (
    <CoffesStyled>
      <ContentCard>
        <img src={Latte} alt="" />
        <Characteristics>
          <CharacteristicsStyled>
            <h4>TRADICIONAL</h4>
          </CharacteristicsStyled>
          <CharacteristicsStyled>
            <h4>Com leite</h4>
          </CharacteristicsStyled>
        </Characteristics>
        <h2>Latte</h2>
        <p>Uma dose de café expresso com o dobro de leite e espuma cremosa</p>
      </ContentCard>
      <QuantyControl>
        <p>R$</p>
        <h6> 9,90</h6>
        <Minus
          size={22}
          color={"#8047F8"}
          onClick={() => handleRemoveCoffeToCart({ type: "latte" })}
        />
        <p>{coffesCount.latte}</p>
        <Plus
          size={22}
          alt=""
          color={"#8047F8"}
          onClick={() => handleAddCoffeToCart({ type: "latte" })}
        />
      </QuantyControl>
    </CoffesStyled>
  );
}
