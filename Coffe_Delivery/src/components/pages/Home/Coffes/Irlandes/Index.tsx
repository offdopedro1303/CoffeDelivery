import { Minus, Plus } from "phosphor-react";
import {
  CoffesStyled,
  ContentCard,
  Characteristics,
  CharacteristicsStyled,
  QuantyControl,
} from "../style";
import irlandes from "../../../../../assets/Img-Coffes/Irlandês.svg";
import { useCart } from "../../../../../context/CartContext";

export function IrlandesCoffe() {
  const { coffesCount, handleAddCoffeToCart, handleRemoveCoffeToCart } =
    useCart();

  return (
    <CoffesStyled>
      <ContentCard>
        <img src={irlandes} alt="" />
        <Characteristics>
          <CharacteristicsStyled>
            <h4>Especial</h4>
          </CharacteristicsStyled>
          <CharacteristicsStyled>
            <h4>Alcoólico</h4>
          </CharacteristicsStyled>
        </Characteristics>
        <h2>Irlândes</h2>
        <p>Bebida a base de café, uísque irlandês, açúcar e chantilly</p>
      </ContentCard>
      <QuantyControl>
        <p>R$</p>
        <h6> 9,90</h6>
        <Minus
          size={22}
          color={"#8047F8"}
          onClick={() => handleRemoveCoffeToCart({ type: "irlandes" })}
        />
        <p>{coffesCount.irlandes}</p>
        <Plus
          size={22}
          alt=""
          color={"#8047F8"}
          onClick={() => handleAddCoffeToCart({ type: "irlandes" })}
        />
      </QuantyControl>
    </CoffesStyled>
  );
}
