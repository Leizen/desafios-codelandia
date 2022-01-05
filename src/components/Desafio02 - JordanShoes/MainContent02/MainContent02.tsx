import { MainFooter } from "../../MainFooter/MainFooter";
import { BodyContent } from "../BodyContent/BodyContent";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Container } from "./styles";

export function MainContent02() {
  return (
    <Container>
      <Header />
      <BodyContent />
      <Footer />
      <MainFooter />
    </Container>
  );
}
