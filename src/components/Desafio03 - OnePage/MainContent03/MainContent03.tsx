import { MainFooter } from "../../MainFooter/MainFooter";
import { Cards } from "../Cards/Cards";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Container } from "./styles";

export function MainContent03() {
  return (
    <Container>
      <Header />
      <Cards />
      <Footer />
      <MainFooter />
    </Container>
  );
}
