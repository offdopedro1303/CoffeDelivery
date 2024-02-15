import {
  Characteristics,
  CharacteristicsStyled,
  CoffesStyled,
  ContentCard,
  QuantyControl,
} from "../style";
import { Plus, Minus } from "phosphor-react";
import CaféGelado from "../../../../../assets/Img-Coffes/Café Gelado.svg";
import { useCart } from "../../../../../context/CartContext";

export function CafeGelado() {
  const { coffesCount, handleAddCoffeToCart, handleRemoveCoffeToCart } =
    useCart();

  return (
    <CoffesStyled>
      <ContentCard>
        <img src={CaféGelado} alt="" />
        <Characteristics>
          <CharacteristicsStyled>
            <h4>TRADICIONAL</h4>
          </CharacteristicsStyled>
          <CharacteristicsStyled>
            <h4>GELADO</h4>
          </CharacteristicsStyled>
        </Characteristics>
        <h2>Expresso Gelado</h2>
        <p>Bebida preparada com café expresso e cubos de gelo</p>
      </ContentCard>
      <QuantyControl>
        <p>R$</p>
        <h6> 9,90</h6>
        <Minus
          size={22}
          color={"#8047F8"}
          onClick={() => handleRemoveCoffeToCart({ type: "cafeGelado" })}
        />
        <p>{coffesCount.cafeGelado}</p>
        <Plus
          size={22}
          alt=""
          color={"#8047F8"}
          onClick={() => handleAddCoffeToCart({ type: "cafeGelado" })}
        />
      </QuantyControl>
    </CoffesStyled>
  );
}
