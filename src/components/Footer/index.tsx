import {
    FooterContainer,
    NavContainer,
    LogoContainer,
  } from "./style";
  import Logo from "../../assets/Logo.svg";
  import { NavLink } from "react-router-dom";
  
  export function Footer() {
    return (
      <FooterContainer>
        <NavContainer>
            <NavLink to={"/"} title="Página Inicial">
                <LogoContainer>
                <img src={Logo} alt="Logo do Café Delivery" />
                </LogoContainer>            
            </NavLink>
        </NavContainer>
      </FooterContainer>
    );
  }
  