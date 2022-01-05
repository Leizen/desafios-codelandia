import { MainFooter } from "../../MainFooter/MainFooter";
import { BlogContent } from "../BlogContent/BlogContent";
import { Header } from "../Header/Header";
import { Container } from "./styles";

export function MainContent01() {
  return (
    <Container>
      <Header />
      <BlogContent />
      <MainFooter />
    </Container>
  );
}
