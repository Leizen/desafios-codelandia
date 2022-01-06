import {
  Container,
  CoverContainer,
  Cover,
  AboutContainer,
  DescriptionContainer,
  InfoContainer,
  TimeContainer,
  RatingContainer,
  Year,
  ButtonContainer,
  PlayButton,
  TrailerButton,
} from "./styles";
import clock from "../../../assets/Desafio06 - Loki/clock.svg";
import starFilled from "../../../assets/Desafio06 - Loki/star.svg";
import starUnfilled from "../../../assets/Desafio06 - Loki/star2.svg";

export function BodyContent() {
  return (
    <Container>
      <CoverContainer>
        <Cover />
      </CoverContainer>

      <AboutContainer>
        <DescriptionContainer>
          Em “Loki” da Marvel Studios, o vilão mercurial Loki (Tom Hiddleston)
          retoma seu papel como o Deus do Mal em uma nova série que ocorre após
          os eventos de “Vingadores: Endgame”.
        </DescriptionContainer>
        <InfoContainer>
          <TimeContainer>
            <img src={clock} alt="" />
            <span>51min</span>
          </TimeContainer>
          <RatingContainer>
            <img src={starFilled} alt="" />
            <img src={starFilled} alt="" />
            <img src={starFilled} alt="" />
            <img src={starFilled} alt="" />
            <img src={starUnfilled} alt="" />
          </RatingContainer>
          <Year>2021</Year>
        </InfoContainer>
        <ButtonContainer>
          <PlayButton>Assistir agora</PlayButton>
          <TrailerButton>Trailer</TrailerButton>
        </ButtonContainer>
      </AboutContainer>
    </Container>
  );
}
