import { Container } from "./styles";
import logoImg from "../../../assets/Desafio07 - Valorant/logo.svg";
import shareImg from "../../../assets/Desafio07 - Valorant/share.svg";

export function Header() {
  return (
    <Container>
      <img src={logoImg} alt="" />
      <span>Riot Games</span>
      <img src={shareImg} alt="" />
    </Container>
  );
}
