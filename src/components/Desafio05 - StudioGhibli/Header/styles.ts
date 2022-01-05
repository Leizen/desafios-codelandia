import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
  @media (max-width: 700px) { 
    height: 6rem;
  }
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 70%;
  @media (max-width: 700px) { 
    width: 90%;
  }
`

export const SocialMidias = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  a:hover{
    filter: opacity(0.5);
  }
`