import {
  Container,
  HighlightsContainer,
  ProductPanel,
  ProductCard,
} from "./styles";

import image1 from "../../../assets/Desafio02 - JordanShoes/air-jordan-1-retro-high-court-purple-w-1-400.png";
import image2 from "../../../assets/Desafio02 - JordanShoes/air-jordan-1-mid-light-smoke-grey-gs-1-1000.png";
import image3 from "../../../assets/Desafio02 - JordanShoes/air-jordan-1-mid-grey-camo-1-1000 1.png";
import image4 from "../../../assets/Desafio02 - JordanShoes/air-jordan-1-mid-dutch-green-1-400.png";
import image5 from "../../../assets/Desafio02 - JordanShoes/air-jordan-1-mid-carbon-fiber-1-1000 1.png";
import image6 from "../../../assets/Desafio02 - JordanShoes/air-jordan-1-mid-bright-citrus-1-1000 1.png";
import image7 from "../../../assets/Desafio02 - JordanShoes/air-jordan-1-mid-black-noble-red-w-1-1000.png";
import image8 from "../../../assets/Desafio02 - JordanShoes/air-jordan-1-high-zoom-cmft-tropical-twist-1-400.png";

export function BodyContent() {
  return (
    <Container>
      <HighlightsContainer>
        <h1>Destaques</h1>
        <span>
          Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.
        </span>
      </HighlightsContainer>
      <ProductPanel>
        <ProductCard>
          <a href="https://www.nike.com.br/masculino/marcas/jordan">
            <img src={image1} alt="Produto"></img>
          </a>
        </ProductCard>
        <ProductCard>
          <a href="https://www.nike.com.br/masculino/marcas/jordan">
            <img src={image2} alt="Produto"></img>
          </a>
        </ProductCard>
        <ProductCard>
          <a href="https://www.nike.com.br/masculino/marcas/jordan">
            <img src={image3} alt="Produto"></img>
          </a>
        </ProductCard>
        <ProductCard>
          <a href="https://www.nike.com.br/masculino/marcas/jordan">
            <img src={image4} alt="Produto"></img>
          </a>
        </ProductCard>
        <ProductCard>
          <a href="https://www.nike.com.br/masculino/marcas/jordan">
            <img src={image5} alt="Produto"></img>
          </a>
        </ProductCard>
        <ProductCard>
          <a href="https://www.nike.com.br/masculino/marcas/jordan">
            <img src={image6} alt="Produto"></img>
          </a>
        </ProductCard>
        <ProductCard>
          <a href="https://www.nike.com.br/masculino/marcas/jordan">
            <img src={image7} alt="Produto"></img>
          </a>
        </ProductCard>
        <ProductCard>
          <a href="https://www.nike.com.br/masculino/marcas/jordan">
            <img src={image8} alt="Produto"></img>
          </a>
        </ProductCard>
      </ProductPanel>
    </Container>
  );
}
