import styled from "styled-components";
import backgroundImg from "../../../assets/Desafio06 - Loki/fundo.png"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-height: 100vh;
  width: 100%;

  background: black;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${backgroundImg});

  @media (max-width: 700px) { 
    height: 120%;
  }
`

export const ContentContainer = styled.div`
  height: 100%;
  width: 60%;
  @media (max-width: 700px) { 
    width: 90%;
  }
`
