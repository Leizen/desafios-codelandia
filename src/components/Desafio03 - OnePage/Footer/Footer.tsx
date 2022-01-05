import {
  Container,
  ContentContainer,
  FormContainer,
  ContainerH1,
  Button,
} from "./styles";

export function Footer() {
  return (
    <Container>
      <ContentContainer>
        <ContainerH1>
          <h1>Entre em Contato</h1>
        </ContainerH1>
        <FormContainer>
          <input type="text" placeholder="Nome"></input>
          <input type="text" placeholder="E-mail"></input>
          <input type="text" placeholder="Telefone"></input>
          <input
            className="lastInput"
            type="text"
            placeholder="Mensagem..."
          ></input>
          <Button>Enviar Mensagem</Button>
        </FormContainer>
      </ContentContainer>
    </Container>
  );
}
