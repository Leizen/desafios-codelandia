import {
  Container,
  ContainerButtons,
  LeftContainer,
  RightContainer,
  ContentContainer,
  ButtonPlay,
  ButtonTrailer,
} from "./styles";
import ghostImage from "../../../assets/Desafio05 - StudioGhibli/ghost.svg";
import playLogo from "../../../assets/Desafio05 - StudioGhibli/play.svg";

export function BodyContent() {
  return (
    <>
      <Container>
        <LeftContainer>
          <ContentContainer>
            <h2>HAYAO MIYAZAKI</h2>
            <h1>A VIAGEM DE CHIHIRO</h1>
            <p>
              Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles
              que a desobedecem são transformados em animais.
            </p>
            <ContainerButtons>
              <ButtonPlay href="#">
                <img src={playLogo} alt="" />
                ASSISTIR AGORA
              </ButtonPlay>
              <ButtonTrailer href="#">ASSISTA O TRAILER</ButtonTrailer>
            </ContainerButtons>
          </ContentContainer>
        </LeftContainer>
        <RightContainer>
          <img src={ghostImage} alt="" />
        </RightContainer>
      </Container>
    </>
  );
}
