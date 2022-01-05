import {
  Container,
  ContainerLogos,
  ContentContainer,
  ChallengesList,
} from "./styles";
import githubLogo from "../../assets/iconmonstr-github-1.svg";
import linkedinLogo from "../../assets/iconmonstr-linkedin-1.svg";
import twitterLogo from "../../assets/iconmonstr-twitter-1.svg";
import { Link } from "react-router-dom";

export function Homepage() {
  return (
    <Container>
      <ContentContainer>
        <h1>Christian</h1>
        <p>25 anos, São Paulo</p>
        <ContainerLogos>
          <a href="https://github.com/Leizen">
            <img src={githubLogo} alt="Github"></img>
          </a>
          <a href="https://www.linkedin.com/in/christian-de-lima-3678a314a/">
            <img src={linkedinLogo} alt="LinkedIn"></img>
          </a>
          <a href="https://twitter.com/leizenex">
            <img src={twitterLogo} alt="Twitter"></img>
          </a>
        </ContainerLogos>
        <h2>Desafios Codelândia</h2>
        <ChallengesList>
          <li>
            <Link to="/desafio-01-blog">Desafio 01 - Blog</Link>
          </li>
          <li>
            <Link to="/desafio-02-jordanshoes">Desafio 02 - JordanShoes</Link>
          </li>
          <li>
            <Link to="/desafio-03-onepage">Desafio 03 - OnePage</Link>
          </li>
          <li>
            <Link to="/desafio-04-login">Desafio 04 - Login</Link>
          </li>
          <li>
            <Link to="/desafio-05-studioghibli">
              Desafio 05 - Studio Ghibli
            </Link>
          </li>
        </ChallengesList>
      </ContentContainer>
    </Container>
  );
}
