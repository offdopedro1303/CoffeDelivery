import { useCart } from "../../../../context/CartContext";
import {
  CardFinished,
  ContentCardFinished,
  FinishedContent,
  PingIcon,
  UserIcon,
  ConfigIconsCard,
  TimerIcon,
  CashIcon,
  AliginTextCard,
  TitlePage,
  BodyConclusionPage,
} from "./styles";
import { MapPinLine, User, Timer, CurrencyDollar } from "phosphor-react";
import conclusionImage from "../../../../assets/conclusionImage.svg";

export function Conclusion() {

  const { userName, streetUser, numberHouse, seuBairro} = useCart();


  return (
    <BodyConclusionPage>
      <FinishedContent>
        <div>
          <TitlePage>Uhu ! Pedido confirmado !!!</TitlePage>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>

        <CardFinished>
          <ConfigIconsCard>
            <ContentCardFinished>
              <UserIcon>
                <User size={22} color={"white"} />
              </UserIcon>
              <p>
                Nome do cliente: <strong>{userName}</strong>
              </p>
            </ContentCardFinished>
            <ContentCardFinished>
              <PingIcon>
                <MapPinLine size={22} />
              </PingIcon>
              <p>
                Entrega em{" "}
                <strong>
                  {streetUser}, {numberHouse}, {seuBairro},
                </strong>{" "}
                - Santo André - SP
              </p>
            </ContentCardFinished>
            <div>
              <ContentCardFinished>
                <TimerIcon>
                  <Timer size={22} color={"white"} />
                </TimerIcon>
                <AliginTextCard>
                  <p>Previsão de Entrega</p>
                  <strong>20 min - 30 min</strong>
                </AliginTextCard>
              </ContentCardFinished>
            </div>

            <ContentCardFinished>
              <CashIcon>
                <CurrencyDollar size={22} />
              </CashIcon>
              <AliginTextCard>
                <p>Pagamento na entrega</p>
                <strong></strong>
              </AliginTextCard>
            </ContentCardFinished>
          </ConfigIconsCard>
        </CardFinished>
      </FinishedContent>
      <div>
        <img src={conclusionImage} alt="" />
      </div>
    </BodyConclusionPage>
  );
}
