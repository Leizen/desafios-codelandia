import styled from "styled-components";
import panelImage from "../../../assets/Desafio02 - JordanShoes/air-jordan.png"

export const Container = styled.div``

export const AboutContainer = styled.div`
  height: 7rem;
`

export const PromoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50%;
  background: #181818;

  span{
    font-family: Montserrat;
    color: #F9F9F9;
    font-weight: 500;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50%;
  background: #F9F9F9;

  span{
    font-family: Montserrat;
    font-weight: 600;
    font-size: 1.5rem;
  }
`

export const PanelContainer = styled.div`
  display: flex;
  justify-content: flex;
  align-items: center;

  width: 100%;
  height: 23rem;
  background: #181818;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${panelImage});
  background-size: cover;
`

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: flex;
  align-items: left;
  flex-direction: column;

  padding-left: 10rem;

  h1{
    font-family: Montserrat;
    font-weight: bold;
    font-size: 2rem;

    color: #F9F9F9;
  }

  p{
    width: 60%;
    font-family: Montserrat;
    font-weight: 600;
    font-size: 1rem;
    line-height: 196.19%;
    margin-top: 1rem;
    
    color: #F9F9F9;
  }
`

export const EmptyContainer = styled.div``