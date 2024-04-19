import {
    FooterContainer,
    NavContainer,
    LogoContainer,
    
  } from "./style";

  import Logo from "../../assets/Logo.svg";
 
  
  export function Footer() {
    return (
      <FooterContainer>
            <NavContainer>
                    <LogoContainer>
                    <img src={Logo} alt="Logo do Café Delivery" />  
                    </LogoContainer> 
            </NavContainer>
      </FooterContainer>
    );
  }

  

