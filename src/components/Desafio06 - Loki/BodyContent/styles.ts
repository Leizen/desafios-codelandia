import styled from "styled-components";
import coverImg from "../../../assets/Desafio06 - Loki/capa.png"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 70%;
  width: 100%;

  padding: 8rem 0;

  @media (max-width: 700px) { 
    flex-direction: column;
    justify-content: center;
    padding: 0 0;
  }
`
export const CoverContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 30%;
@media (max-width: 700px) { 
  width: 100%;
  }
`

export const Cover = styled.div`
  background: black;
  width: 184px;
  height: 267px;
  border-radius: 20px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${coverImg});

  @media (max-width: 700px) { 
    margin-bottom: 4rem;
  }
`

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 70%;

  @media (max-width: 700px) { 
    width: 100%;
  }
`

export const DescriptionContainer = styled.p`
  font-family: B612;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  color: #FFFFFF;
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  width: 100%;
`

export const TimeContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
  span{
    font-family: B612;
    font-style: normal;
    font-weight: bold;
    font-size: 1.3rem;
    margin-left: 0.5rem;

    color: #FFFFFF;
  }
`

export const RatingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;

  @media (max-width: 700px) { 
    display: flex;
    justify-content: center;
    width: 100%;
  }
`

export const Year = styled.h3`
  font-family: B612;
  font-style: normal;
  font-weight: bold;
  font-size: 1.3rem;

  color: #FFFFFF;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;

  width: 100%;
  height: 100%;

  @media (max-width: 700px) { 
    margin-bottom: 6rem;
    width: 100%;
  }  
`

export const PlayButton = styled.button`

  width: 184px;
  height: 52px;

  background: #0072D2;

  border: none;
  border-radius: 3px;

  font-size: 1rem;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;

  color: #FFFFFF;

  transition: filter 0.2s;
  transition: font-size 0.2s;
  cursor: pointer;
  &:hover{
    filter: brightness(0.6);
    font-size: 1.1rem;
  }
`

export const TrailerButton = styled.button`
  width: 115px;
  height: 52px;
  margin-left: 1.5rem;
  
  background: #131318;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 3px;

  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;

  color: #FFFFFF;

  transition: filter 0.2s;
  transition: font-size 0.2s;

  &:hover{
    filter: brightness(0.6);
    font-size: 1.1rem;
  }
`