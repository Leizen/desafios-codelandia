import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 560px;

  background: #D7D5FF;

  @media (max-width: 700px) { 
    width: 100%;
    flex-direction: column;
    height: 600px;
  }
`

export const AboutContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  
  padding: 14rem;
  width: 45%;

  @media (max-width: 700px) { 
    width: 80%;
    padding: 2rem;
  }

  h1{
    font-family: Merriweather;
    font-style: normal;
    font-weight: normal;

    padding-bottom: 1rem;
  }

  p{
    font-family: Lato;
    font-weight: normal;
  }

  button{
    height: 50px;
    width: 40%;
    margin-top: 2rem;

    background: #6C63FF;
    border: none;
    border-radius: 5px;

    font-family: Lato;
    font-size: 20px;

    color: #FFFFFF; 

    transition: filter 0.2s;
    
    &:hover{
      filter: brightness(0.9)
    }
  }
`

export const ImageContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50%;


`