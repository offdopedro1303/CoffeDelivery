import {
  Characteristics,
  CharacteristicsStyled,
  CoffesStyled,
  ContentCard,
  QuantyControl,
} from "../style";
import { Plus, Minus } from "phosphor-react";
import expressoCremoso from "../../../../../assets/Img-Coffes/Expresso Cremoso.svg";
import { useCart } from "../../../../../context/CartContext";

export function ExpressoCremoso() {
  const { coffesCount, handleAddCoffeToCart, handleRemoveCoffeToCart } =
    useCart();

  return (
    <CoffesStyled>
      <ContentCard>
        <img src={expressoCremoso} alt="" />
        <Characteristics>
          <CharacteristicsStyled>
            <h4>Tradicional</h4>
          </CharacteristicsStyled>
        </Characteristics>
        <h2>Expresso Cremoso</h2>
        <p>Café expresso tradicional com espuma cremosa</p>
      </ContentCard>
      <QuantyControl>
        <p>R$</p>
        <h6> 9,90</h6>
        <Minus
          size={22}
          color={"#8047F8"}
          onClick={() => handleRemoveCoffeToCart({ type: "cremoso" })}
        />
        <p>{coffesCount.cremoso}</p>
        <Plus
          size={22}
          alt=""
          color={"#8047F8"}
          onClick={() => handleAddCoffeToCart({ type: "cremoso" })}
        />
      </QuantyControl>
    </CoffesStyled>
  );
}
