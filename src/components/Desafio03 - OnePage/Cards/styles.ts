import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 0;
`

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  justify-items: center;
  
  width: 90%;

  @media (max-width: 700px) { 
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 340px;
  height: 423px;
  
`



export const ContainerImage = styled.div`
  width: 100%;
  height: 50%;
  
  
  background: ${(props) => 
    props.id === "first" ? '#FF6363;' :
    props.id === "second" ? '#63ECFF;' :
    props.id === "third" ? '#A33EA1':
    props.id === "fourth" ? '#EE8130' :
    props.id === "five" ? '#6390F0' :
    props.id === "six" && '#D685AD' };
`

export const ContainerInfo = styled.div`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;

  width: 100%;
  

  background: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

  h1 {
    font-family: Merriweather;
    font-weight: bold;
    font-size: 1.5rem;
    height: 50%;
    margin-bottom: 1rem;

    color: #2B2B2B;
  }

  p {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: #555555;
  }
`