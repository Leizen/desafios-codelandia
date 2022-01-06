import { MainFooter } from "../../MainFooter/MainFooter";
import { BodyContent } from "../BodyContent/BodyContent";
import { Header } from "../Header/Header";
import { Container, ContentContainer } from "./styles";

export function MainContent06() {
  return (
    <>
      <Container>
        <ContentContainer>
          <Header />
          <BodyContent />
        </ContentContainer>
      </Container>
      <MainFooter />
    </>
  );
}
