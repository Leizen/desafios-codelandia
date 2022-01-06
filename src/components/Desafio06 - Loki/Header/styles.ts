import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 30%;

  @media (max-width: 700px) { 
    height: 30%;
    justify-content: center;
  }
`

export const AvaibleContainer = styled.h2`
  color: #FFFFFF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-transform: uppercase;

  font-family: B612;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: bold;

  padding: 4rem 0;

  @media (max-width: 700px) { 
    padding-top: 2rem;
    height: 0;
  }
`

export const TitleContainer = styled.h1`
  color: #FFFFFF;
  text-transform: uppercase;

  font-family: B612;
  font-style: normal;
  font-weight: bold;
  font-size: 8rem;

  
`