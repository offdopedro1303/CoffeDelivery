import { Minus, Plus } from "phosphor-react";
import {
  CoffesStyled,
  ContentCard,
  Characteristics,
  CharacteristicsStyled,
  QuantyControl,
} from "../style";
import havaiano from "../../../../../assets/Img-Coffes/Havaiano.svg";
import { useCart } from "../../../../../context/CartContext";

export function HavaianoCoffe() {
  const { coffesCount, handleAddCoffeToCart, handleRemoveCoffeToCart } =
    useCart();

  return (
    <CoffesStyled>
      <ContentCard>
        <img src={havaiano} alt="" />
        <Characteristics>
          <CharacteristicsStyled>
            <h4>Especial</h4>
          </CharacteristicsStyled>
        </Characteristics>
        <h2>Havaiano</h2>
        <p>Bebida adocicada preparada com café e leite de coco</p>
        <br />
      </ContentCard>
      <QuantyControl>
        <p>R$</p>
        <h6> 9,90</h6>
        <Minus
          size={22}
          color={"#8047F8"}
          onClick={() => handleRemoveCoffeToCart({ type: "havaiano" })}
        />
        <p>{coffesCount.havaiano}</p>
        <Plus
          size={22}
          alt=""
          color={"#8047F8"}
          onClick={() => handleAddCoffeToCart({ type: "havaiano" })}
        />
      </QuantyControl>
    </CoffesStyled>
  );
}
