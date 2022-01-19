import { Container } from "./styles";
import logoImg from "../../../assets/Desafio07 - Valorant/logo.svg";
import shareImg from "../../../assets/Desafio07 - Valorant/share.svg";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <img src={logoImg} alt="" />
      <span>Riot Games</span>
      <Link target="_blank" to="#" rel="noreferrer">
        <img src={shareImg} alt="" />
      </Link>
    </Container>
  );
}
