import { Minus, Plus } from "phosphor-react";
import {
  CoffesStyled,
  ContentCard,
  Characteristics,
  CharacteristicsStyled,
  QuantyControl,
} from "../style";
import cubano from "../../../../../assets/Img-Coffes/Cubano.svg";
import { useCart } from "../../../../../context/CartContext";

export function CubanoCoffe() {
  const { coffesCount, handleAddCoffeToCart, handleRemoveCoffeToCart } =
    useCart();

  return (
    <CoffesStyled>
      <ContentCard>
        <img src={cubano} alt="" />
        <Characteristics>
          <CharacteristicsStyled>
            <h4>Especial</h4>
          </CharacteristicsStyled>
          <CharacteristicsStyled>
            <h4>Alcoólico</h4>
          </CharacteristicsStyled>
          <CharacteristicsStyled>
            <h4>Gelado</h4>
          </CharacteristicsStyled>
        </Characteristics>
        <h2>Cubano</h2>
        <p>Drink gelado de café expresso com rum, creme de leite e hortelã</p>
      </ContentCard>
      <QuantyControl>
        <p>R$</p>
        <h6> 9,90</h6>
        <Minus
          size={22}
          color={"#8047F8"}
          onClick={() => handleRemoveCoffeToCart({ type: "cubano" })}
        />
        <p>{coffesCount.cubano}</p>
        <Plus
          size={22}
          alt=""
          color={"#8047F8"}
          onClick={() => handleAddCoffeToCart({ type: "cubano" })}
        />
      </QuantyControl>
    </CoffesStyled>
  );
}
