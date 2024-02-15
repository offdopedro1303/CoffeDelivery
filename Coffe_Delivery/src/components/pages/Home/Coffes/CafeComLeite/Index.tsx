import { Minus, Plus } from "phosphor-react";
import {
  Characteristics,
  CharacteristicsStyled,
  CoffesStyled,
  ContentCard,
  QuantyControl,
} from "../style";
import CaféComLeite from "../../../../../assets/Img-Coffes/Café com Leite.svg";
import { useCart } from "../../../../../context/CartContext";

export function CafeComLeite() {
  const { coffesCount, handleAddCoffeToCart, handleRemoveCoffeToCart } =
    useCart();

  return (
    <CoffesStyled>
      <ContentCard>
        <img src={CaféComLeite} alt="" />
        <Characteristics>
          <CharacteristicsStyled>
            <h4>TRADICIONAL</h4>
          </CharacteristicsStyled>
          <CharacteristicsStyled>
            <h4>Com leite</h4>
          </CharacteristicsStyled>
        </Characteristics>
        <h2>Café com Leite</h2>
        <p>Meio a meio de expresso tradicional com leite vaporizado</p>
        <br />
      </ContentCard>
      <QuantyControl>
        <p>R$</p>
        <h6> 9,90</h6>
        <Minus
          size={22}
          color={"#8047F8"}
          onClick={() => handleRemoveCoffeToCart({ type: "cafeComLeite" })}
        />
        <p>{coffesCount.cafeComLeite}</p>
        <Plus
          size={22}
          alt=""
          color={"#8047F8"}
          onClick={() => handleAddCoffeToCart({ type: "cafeComLeite" })}
        />
      </QuantyControl>
    </CoffesStyled>
  );
}
