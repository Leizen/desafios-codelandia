import styled from "styled-components";

export const Container = styled.div`
  background: #F9F9F9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding-bottom: 4rem;
`

export const HighlightsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding-top: 3rem;
  padding-bottom: 2rem;

  h1{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 2rem;

    color: #181818;
  }

  span {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    margin-top: 1rem;

    color: #474747;
  }
`

export const ProductPanel = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  width: 80%;

  background: #F9F9F9;

  @media (max-width: 700px) {
    
    grid-template-columns: 1fr;
    margin-left: 20%;
    width: 100%;
  }
`

export const ProductCard = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 302px;
  margin-top: 1rem;

  background: #EBE9EA;

  @media (max-width: 700px) {
    width: 80%;
  }
`