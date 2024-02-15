import { Minus, Plus } from "phosphor-react";
import {
  CoffesStyled,
  ContentCard,
  Characteristics,
  CharacteristicsStyled,
  QuantyControl,
} from "../style";
import chocolateQuente from "../../../../../assets/Img-Coffes/Chocolate Quente.svg";
import { useCart } from "../../../../../context/CartContext";
export function ChocolateQuente() {
  const { coffesCount, handleAddCoffeToCart, handleRemoveCoffeToCart } =
    useCart();

  return (
    <CoffesStyled>
      <ContentCard>
        <img src={chocolateQuente} alt="" />
        <Characteristics>
          <CharacteristicsStyled>
            <h4>especial</h4>
          </CharacteristicsStyled>
          <CharacteristicsStyled>
            <h4>Com leite</h4>
          </CharacteristicsStyled>
        </Characteristics>
        <h2>Chocolate Quente</h2>
        <p>Bebida feita com chocolate dissolvido no leite quente e café</p>
        <br />
      </ContentCard>
      <QuantyControl>
        <p>R$</p>
        <h6> 9,90</h6>
        <Minus
          size={22}
          color={"#8047F8"}
          onClick={() => handleRemoveCoffeToCart({ type: "chocolateQuente" })}
        />
        <p>{coffesCount.chocolateQuente}</p>
        <Plus
          size={22}
          alt=""
          color={"#8047F8"}
          onClick={() => handleAddCoffeToCart({ type: "chocolateQuente" })}
        />
      </QuantyControl>
    </CoffesStyled>
  );
}
