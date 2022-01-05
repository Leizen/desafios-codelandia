import { Container, CardContainer, CardHeader, CardH1, CardP } from "./styles";
import heartIcon from "../../../assets/Desafio01 - Blog/heart.svg";

export function BlogContent() {
  return (
    <Container>
      <CardContainer>
        <CardHeader>
          <span>02 de jul, 2021</span>
          <img src={heartIcon} alt="Like"></img>
        </CardHeader>
        <CardH1>Agora é oficial: o Windows 11 está vindo</CardH1>
        <CardP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
          risus lectus. Donec at gravida ipsum, ac venenatis risus. Praesent
          varius, justo quis eleifend imperdiet, sapien elit placerat risus,
        </CardP>
      </CardContainer>
      <CardContainer>
        <CardHeader>
          <span>02 de jul, 2021</span>
          <img src={heartIcon} alt="Like"></img>
        </CardHeader>
        <CardH1>Tim Berners-Lee vai leiloar código-fonte da web</CardH1>
        <CardP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
          risus lectus. Donec at gravida ipsum, ac venenatis risus. Praesent
          varius, justo quis eleifend imperdiet, sapien elit placerat risus,
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
          risus lectus. Donec at gravida ipsum, ac venenatis risus. Praesent
          varius, justo quis eleifend imperdiet, sapien elit placerat risus,
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
          risus lectus. Donec at gravida ipsum, ac venenatis risus. Praesent
          varius, justo quis eleifend imperdiet, sapien elit placerat risus,
        </CardP>
      </CardContainer>
      <CardContainer>
        <CardHeader>
          <span>02 de jul, 2021</span>
          <img src={heartIcon} alt="Like"></img>
        </CardHeader>
        <CardH1>Tem Firefox novo no pedaço e você vai querer migrar</CardH1>
        <CardP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
          risus lectus. Donec at gravida ipsum, ac venenatis risus. Praesent
        </CardP>
      </CardContainer>
      <CardContainer>
        <CardHeader>
          <span>02 de jul, 2021</span>
          <img src={heartIcon} alt="Like"></img>
        </CardHeader>
        <CardH1>John McAfee, criador do antivírus McAfee, morre</CardH1>
        <CardP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
          risus lectus. Donec at gravida ipsum, ac venenatis risus. Praesent
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
          risus lectus. Donec at gravida ipsum, ac venenatis risus. Praesent
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
          risus lectus. Donec at gravida ipsum, ac venenatis risus. Praesent
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
          risus lectus. Donec at gravida ipsum, ac venenatis risus. Praesent
        </CardP>
      </CardContainer>
    </Container>
  );
}
