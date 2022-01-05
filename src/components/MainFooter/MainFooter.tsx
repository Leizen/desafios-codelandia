import {
  Container,
  StyledSpan,
  ContentContainer,
  ContainerLogos,
} from "./styles";

import githubLogo from "../../assets/iconmonstr-github-1.svg";
import linkedinLogo from "../../assets/iconmonstr-linkedin-1.svg";
import twitterLogo from "../../assets/iconmonstr-twitter-1.svg";
import { Link } from "react-router-dom";

export function MainFooter() {
  return (
    <>
      <Container>
        <ContentContainer>
          <StyledSpan>
            <Link to="/">Voltar a página inicial</Link>
          </StyledSpan>
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
        </ContentContainer>
      </Container>
    </>
  );
}
