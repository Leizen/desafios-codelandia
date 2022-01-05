import { AboutContainer, Container, ImageContainer } from "./styles";
import monstersBox from "../../../assets/Desafio03 - OnePage/monsters.png";

export function Header() {
  return (
    <Container>
      <AboutContainer>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu
          massa sit amet augue consectetur ullamcorper non ac massa.
        </p>
        <button>Botão</button>
      </AboutContainer>
      <ImageContainer>
        <img src={monstersBox} alt="" />
      </ImageContainer>
    </Container>
  );
}
