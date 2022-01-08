import styled from "styled-components";
import backgroundImg from "../../../assets/Desafio07 - Valorant/background.png"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 17, 0.494);

  
  background: rgb(31, 35, 38);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: repeating-linear-gradient(
      125deg,
      rgba(31, 35, 38, 0.9906163148853291) 0%,
      rgba(26, 10, 12, 0.857) 50%,
      rgba(15, 44, 50, 1) 120%
    ),
    url(${backgroundImg}); 

    @media (max-width: 700px) { 
      height: 100%;
  }
`

export const ContentContainer = styled.div`
  height: 100%;
  width: 80%;

  @media (max-width: 780px) { 
    width: 100%;
  }  
`