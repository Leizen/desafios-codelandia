import { Container } from "./styles";
import { Header } from "../Header/Header";
import { BodyContent } from "../BodyContent/BodyContent";
import { MainFooter } from "../../MainFooter/MainFooter";

export function MainContent05() {
  return (
    <>
      <Container>
        <Header />
        <BodyContent />
      </Container>
      <MainFooter />
    </>
  );
}
