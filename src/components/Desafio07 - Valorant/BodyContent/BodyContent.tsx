import {
  Container,
  LeftContainer,
  RightContainer,
  GameName,
  GameContent,
  SocialMidiaContainer,
  CharactersContainer,
  Character,
  CharacterPortraitBackground,
  CharacterContainer,
  CharacterButton,
  CharacterNameDiv,
} from "./styles";
import stroke from "../../../assets/Desafio07 - Valorant/stroke.png";
import facebook from "../../../assets/Desafio07 - Valorant/facebook.svg";
import instagram from "../../../assets/Desafio07 - Valorant/instagram.svg";
import twitter from "../../../assets/Desafio07 - Valorant/twitter.svg";
import sovaImg from "../../../assets/Desafio07 - Valorant/sovaImg.png";
import omenImg from "../../../assets/Desafio07 - Valorant/omenImg.png";
import sageImg from "../../../assets/Desafio07 - Valorant/sageImg.png";
import omen_portrait from "../../../assets/Desafio07 - Valorant/omen_portrait.svg";
import sova_portrait from "../../../assets/Desafio07 - Valorant/sova_portrait.svg";
import sage_portrait from "../../../assets/Desafio07 - Valorant/sage_portrait.svg";
import { useState } from "react";

export function BodyContent() {
  const [characterImage, setCharacterImage] = useState(omenImg);

  function handleCharacterImage(value: string) {
    setCharacterImage(value);
  }

  return (
    <Container>
      <LeftContainer>
        <GameContent>
          <GameName>VALORANT</GameName>
          <CharactersContainer>
            <Character>
              <CharacterPortraitBackground>
                <img src={stroke} alt="" />
                <CharacterContainer>
                  <CharacterButton
                    key={omenImg}
                    onClick={() => handleCharacterImage(omenImg)}
                  >
                    <img src={omen_portrait} alt="" />
                  </CharacterButton>
                </CharacterContainer>
              </CharacterPortraitBackground>
              <CharacterNameDiv>
                <span>Omen</span>
              </CharacterNameDiv>
            </Character>
            <Character>
              <CharacterPortraitBackground>
                <img src={stroke} alt="" />
                <CharacterContainer>
                  <CharacterButton
                    key={sageImg}
                    onClick={() => handleCharacterImage(sageImg)}
                  >
                    <img src={sage_portrait} alt="" />
                  </CharacterButton>
                </CharacterContainer>
              </CharacterPortraitBackground>
              <CharacterNameDiv>
                <span>Sage</span>
              </CharacterNameDiv>
            </Character>
            <Character>
              <CharacterPortraitBackground>
                <img src={stroke} alt="" />
                <CharacterContainer>
                  <CharacterButton
                    key={sovaImg}
                    onClick={() => handleCharacterImage(sovaImg)}
                  >
                    <img src={sova_portrait} alt="" />
                  </CharacterButton>
                </CharacterContainer>
              </CharacterPortraitBackground>
              <CharacterNameDiv>
                <span>Sova</span>
              </CharacterNameDiv>
            </Character>
          </CharactersContainer>
        </GameContent>
        <SocialMidiaContainer>
          <a
            target="_blank"
            href="https://www.instagram.com/playvalorantofficial/"
            rel="noreferrer"
          >
            <img src={instagram} alt="" />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/playvalorant"
            rel="noreferrer"
          >
            <img src={twitter} alt="" />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/PlayVALORANT/"
            rel="noreferrer"
          >
            <img src={facebook} alt="" />
          </a>
        </SocialMidiaContainer>
      </LeftContainer>
      <RightContainer>
        <img src={characterImage} alt="" />
      </RightContainer>
    </Container>
  );
}
