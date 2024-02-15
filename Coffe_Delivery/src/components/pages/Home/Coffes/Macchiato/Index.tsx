import { Minus, Plus } from "phosphor-react";
import {
  CoffesStyled,
  ContentCard,
  Characteristics,
  CharacteristicsStyled,
  QuantyControl,
} from "../style";
import Macchiato from "../../../../../assets/Img-Coffes/Macchiato.svg";
import { useCart } from "../../../../../context/CartContext";

export function MacchiatoCoffe() {
  const { coffesCount, handleAddCoffeToCart, handleRemoveCoffeToCart } =
    useCart();

  return (
    <CoffesStyled>
      <ContentCard>
        <img src={Macchiato} alt="" />
        <Characteristics>
          <CharacteristicsStyled>
            <h4>TRADICIONAL</h4>
          </CharacteristicsStyled>
          <CharacteristicsStyled>
            <h4>Com leite</h4>
          </CharacteristicsStyled>
        </Characteristics>
        <h2>Macchiato</h2>
        <p>Café expresso misturado com um pouco de leite quente e espuma</p>
      </ContentCard>
      <QuantyControl>
        <p>R$</p>
        <h6> 9,90</h6>
        <Minus
          size={22}
          color={"#8047F8"}
          onClick={() => handleRemoveCoffeToCart({ type: "macchiato" })}
        />
        <p>{coffesCount.macchiato}</p>
        <Plus
          size={22}
          alt=""
          color={"#8047F8"}
          onClick={() => handleAddCoffeToCart({ type: "macchiato" })}
        />
      </QuantyControl>
    </CoffesStyled>
  );
}
