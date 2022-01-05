import { Container, HeaderContent, SocialMidias } from "./styles";
import ghibliLogo from "../../../assets/Desafio05 - StudioGhibli/logo.svg";
import facebookLogo from "../../../assets/Desafio05 - StudioGhibli/facebook.svg";
import instagramLogo from "../../../assets/Desafio05 - StudioGhibli/instagram.svg";
import twitterLogo from "../../../assets/Desafio05 - StudioGhibli/twitter.svg";
import youtubeLogo from "../../../assets/Desafio05 - StudioGhibli/youtube.svg";

export function Header() {
  return (
    <Container>
      <HeaderContent>
        <img src={ghibliLogo} alt="" />
        <SocialMidias>
          <a
            target="_blank"
            href="https://www.facebook.com/FansOfStudioGhibli/"
            rel="noreferrer"
          >
            <img src={facebookLogo} alt="" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/ghiblibrasil/"
            rel="noreferrer"
          >
            <img src={instagramLogo} alt="" />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/ghibliusa"
            rel="noreferrer"
          >
            <img src={twitterLogo} alt="" />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/results?search_query=studio+ghibli"
            rel="noreferrer"
          >
            <img src={youtubeLogo} alt="" />
          </a>
        </SocialMidias>
      </HeaderContent>
    </Container>
  );
}
