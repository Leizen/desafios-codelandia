import {
  Container,
  AboutContainer,
  PromoContainer,
  LogoContainer,
  PanelContainer,
  DescriptionContainer,
  EmptyContainer,
} from "./styles";

export function Header() {
  return (
    <Container>
      <AboutContainer>
        <PromoContainer>
          <span>Ganhe R$ 10,00 de desconto no frete</span>
        </PromoContainer>
        <LogoContainer>
          <span>JordanShoes</span>
        </LogoContainer>
      </AboutContainer>
      <PanelContainer>
        <DescriptionContainer>
          <h1>A melhor loja de Jordan</h1>
          <p>
            O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e
            o jogador Michael Jordan.
          </p>
        </DescriptionContainer>
        <EmptyContainer></EmptyContainer>
      </PanelContainer>
    </Container>
  );
}
