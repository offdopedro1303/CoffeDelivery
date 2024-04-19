import {
    FooterContainer,
    Parte1,
    LogoContainer,
    Termo,
    Social,
    So1,
    So2,
    So3,
    
  } from "./style";

  import Logo from "../../assets/Logo.svg";
  import { FaFacebook } from "react-icons/fa";
  import { FaInstagram} from "react-icons/fa";
  import { FaWhatsapp } from "react-icons/fa";
  
  export function Footer() {
    return (
        <FooterContainer>
            <Parte1>
                <LogoContainer>
                 <img src={Logo} alt="Logo do Café Delivery" />         
                </LogoContainer> 
                <Termo>
                    <p>Termos de uso</p>  
                </Termo>
                <Social>
                    <So1>
                        <FaWhatsapp/>
                    </So1>
                    <So2>
                        <FaInstagram/>
                    </So2>
                    <So3>                        
                        <FaFacebook/>
                    </So3>
                </Social>
            </Parte1>
        </FooterContainer>
    );
  }

  

