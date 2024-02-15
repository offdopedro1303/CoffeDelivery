import {
  BodyContents,
  Glass,
  InfoContent,
  FirstColumnIcons,
  ShoppingCartStyled,
  Packagestyled,
  FastDeliverystyle,
  CoffeStyleIcon,
  Menu,
  InfoHeader,
} from "./styles";

import Image from "../../../../assets/Imagem.svg";

import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { TradicionalCoffe } from "../Coffes/Tradicional/Index";
import { AmericanoCoffe } from "../Coffes/AmericanoCoffe/Index";
import { OptionsMenu } from "./styles";
import { ExpressoCremoso } from "../Coffes/expressoCremoso/Index";
import { CafeGelado } from "../Coffes/CafeGelado/Index";
import { CafeComLeite } from "../Coffes/CafeComLeite/Index";
import { LatteCoffe } from "../Coffes/Latte/Index";
import { CapuccinoCoffe } from "../Coffes/Capuccino/Index";
import { MacchiatoCoffe } from "../Coffes/Macchiato/Index";
import { MochaccinoCoffe } from "../Coffes/Mochaccino/Index";
import { ChocolateQuente } from "../Coffes/ChocolateQuente/Index";
import { CubanoCoffe } from "../Coffes/Cubano/Index";
import { HavaianoCoffe } from "../Coffes/Havaiano/Index";
import { ArabeCoffe } from "../Coffes/Arabe/Index";
import { IrlandesCoffe } from "../Coffes/Irlandes/Index";

export function BodyCoffe() {
  return (
    <div>
      <BodyContents>
        <InfoHeader>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia !</h1>
            <div>
              <p>
                Com o Coffe Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </div>
            <InfoContent>
              <div>
                <FirstColumnIcons>
                  <ShoppingCartStyled>
                    <ShoppingCart alt="" color={"white"} size={22} />
                  </ShoppingCartStyled>
                  <p>Compra Simples e segura</p>
                </FirstColumnIcons>
                <FirstColumnIcons>
                  <FastDeliverystyle>
                    <Timer alt="" color={"white"} size={22} />
                  </FastDeliverystyle>
                  <p>Entrega rápida e rastreada</p>
                </FirstColumnIcons>
              </div>
              <div>
                <FirstColumnIcons>
                  <Packagestyled>
                    <Package alt="" color={"white"} size={22} />
                  </Packagestyled>
                  <p>Embalagem mantém o café intacto</p>
                </FirstColumnIcons>
                <FirstColumnIcons>
                  <CoffeStyleIcon>
                    <Coffee alt="" color={"white"} size={22} />
                  </CoffeStyleIcon>
                  <p>O café chega fresquinho até você</p>
                </FirstColumnIcons>
              </div>
            </InfoContent>
          </div>
          <div>
            <Glass src={Image} alt="" />
          </div>
        </InfoHeader>
      </BodyContents>
      {/*Conteudo da pagina inteira*/}
      <div>
        <Menu>
          <h1>Menu</h1>
          {/* Cardapio */}

          <OptionsMenu>
            <TradicionalCoffe />
            <AmericanoCoffe />
            <ExpressoCremoso />
            <CafeGelado />
          </OptionsMenu>

          <OptionsMenu>
            <CafeComLeite />
            <LatteCoffe />
            <CapuccinoCoffe />
            <MacchiatoCoffe />
          </OptionsMenu>

          <OptionsMenu>
            <MochaccinoCoffe />
            <ChocolateQuente />
            <CubanoCoffe />
            <HavaianoCoffe />
          </OptionsMenu>

          <OptionsMenu>
            <ArabeCoffe />
            <IrlandesCoffe />
          </OptionsMenu>
          {/* Cardapio */}
        </Menu>
      </div>
    </div>
  );
}
