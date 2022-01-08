import {
  Container,
  LeftContainer,
  RightContainer,
  GameName,
  GameContent,
  SocialMidiaContainer,
  CharactersContainer,
  Character,
  CharacterContainer,
  CharacterButton,
} from "./styles";
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
              <CharacterContainer>
                <CharacterButton
                  key={omenImg}
                  onClick={() => handleCharacterImage(omenImg)}
                >
                  <img src={omen_portrait} alt="" />
                </CharacterButton>
              </CharacterContainer>
              <span>Omen</span>
            </Character>
            <Character>
              <CharacterContainer>
                <CharacterButton
                  key={sageImg}
                  onClick={() => handleCharacterImage(sageImg)}
                >
                  <img src={sage_portrait} alt="" />
                </CharacterButton>
              </CharacterContainer>
              <span>Sage</span>
            </Character>
            <Character>
              <CharacterContainer>
                <CharacterButton
                  key={sovaImg}
                  onClick={() => handleCharacterImage(sovaImg)}
                >
                  <img src={sova_portrait} alt="" />
                </CharacterButton>
              </CharacterContainer>
              <span>Sova</span>
            </Character>
          </CharactersContainer>
        </GameContent>
        <SocialMidiaContainer></SocialMidiaContainer>
      </LeftContainer>
      <RightContainer>
        <img src={characterImage} alt="" />
      </RightContainer>
    </Container>
  );
}
