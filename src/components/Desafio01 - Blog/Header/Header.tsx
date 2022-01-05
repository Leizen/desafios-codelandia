import { Container, InfoContainer, Input, InputContainer } from "./styles";
import searchIcon from "../../../assets/Desafio01 - Blog/searchIcon.svg";

export function Header() {
  return (
    <Container>
      <InfoContainer>
        <span>Codelândia</span>
        <span>Blog</span>
      </InfoContainer>
      <InputContainer>
        <img src={searchIcon} alt="Search" />
        <Input placeholder="Pesquisar no blog" />
      </InputContainer>
    </Container>
  );
}
