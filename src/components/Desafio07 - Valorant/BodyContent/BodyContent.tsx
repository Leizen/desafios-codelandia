import {
  Container,
  LeftContainer,
  RightContainer,
  GameName,
  GameContent,
  SocialMidiaContainer,
  CharactersContainer,
  Character,
  CharacterButton,
} from "./styles";
import phoenixImg from "../../../assets/Desafio07 - Valorant/phoenix.svg";
import omen_portrait from "../../../assets/Desafio07 - Valorant/omen_portrait.svg";
import sova_portrait from "../../../assets/Desafio07 - Valorant/sova_portrait.svg";
import sage_portrait from "../../../assets/Desafio07 - Valorant/sage_portrait.svg";

export function BodyContent() {
  return (
    <Container>
      <LeftContainer>
        <GameContent>
          <GameName>VALORANT</GameName>
          <CharactersContainer>
            <Character>
              <div>
                <CharacterButton>
                  <img src={omen_portrait} alt="" />
                </CharacterButton>
              </div>
              <span>Omen</span>
            </Character>
            <Character>
              <CharacterButton>
                <img src={sage_portrait} alt="" />
              </CharacterButton>
              <span>Sage</span>
            </Character>
            <Character>
              <CharacterButton>
                <img src={sova_portrait} alt="" />
              </CharacterButton>
              <span>Sova</span>
            </Character>
          </CharactersContainer>
        </GameContent>
        <SocialMidiaContainer></SocialMidiaContainer>
      </LeftContainer>
      <RightContainer>
        <img src={phoenixImg} alt="" />
      </RightContainer>
    </Container>
  );
}
