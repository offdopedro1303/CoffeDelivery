import { Minus, Plus } from "phosphor-react";
import {
  Characteristics,
  CharacteristicsStyled,
  CoffesStyled,
  ContentCard,
  QuantyControl,
} from "../style";
import arabe from "../../../../../assets/Img-Coffes/Árabe.svg";
import { useCart } from "../../../../../context/CartContext";

export function ArabeCoffe() {
  const { coffesCount, handleAddCoffeToCart, handleRemoveCoffeToCart } =
    useCart();
  return (
    <CoffesStyled>
      <ContentCard>
        <img src={arabe} alt="" />
        <Characteristics>
          <CharacteristicsStyled>
            <h4>Especial</h4>
          </CharacteristicsStyled>
        </Characteristics>
        <h2>Árabe</h2>
        <p>Bebida preparada com grãos de café árabe e especiarias</p>
      </ContentCard>
      <QuantyControl>
        <p>R$</p>
        <h6> 9,90</h6>
        <Minus
          size={22}
          color={"#8047F8"}
          onClick={() => handleRemoveCoffeToCart({ type: "arabe" })}
        />
        <p>{coffesCount.arabe}</p>
        <Plus
          size={22}
          alt=""
          color={"#8047F8"}
          onClick={() => handleAddCoffeToCart({ type: "arabe" })}
        />
      </QuantyControl>
    </CoffesStyled>
  );
}
