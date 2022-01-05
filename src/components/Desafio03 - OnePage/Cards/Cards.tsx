import {
  Card,
  Container,
  ContainerCards,
  ContainerImage,
  ContainerInfo,
} from "./styles";

export function Cards() {
  return (
    <Container>
      <ContainerCards>
        <Card>
          <ContainerImage id="first"></ContainerImage>
          <ContainerInfo>
            <h1>Título do card</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum in neque et nisl.
            </p>
          </ContainerInfo>
        </Card>
        <Card>
          <ContainerImage id="second"></ContainerImage>
          <ContainerInfo>
            <h1>Título do card</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum in neque et nisl.
            </p>
          </ContainerInfo>
        </Card>
        <Card>
          <ContainerImage id="third"></ContainerImage>
          <ContainerInfo>
            <h1>Título do card</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum in neque et nisl.
            </p>
          </ContainerInfo>
        </Card>
        <Card>
          <ContainerImage id="fourth"></ContainerImage>
          <ContainerInfo>
            <h1>Título do card</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum in neque et nisl.
            </p>
          </ContainerInfo>
        </Card>
        <Card>
          <ContainerImage id="five"></ContainerImage>
          <ContainerInfo>
            <h1>Título do card</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum in neque et nisl.
            </p>
          </ContainerInfo>
        </Card>
        <Card>
          <ContainerImage id="six"></ContainerImage>
          <ContainerInfo>
            <h1>Título do card</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum in neque et nisl.
            </p>
          </ContainerInfo>
        </Card>
      </ContainerCards>
    </Container>
  );
}
