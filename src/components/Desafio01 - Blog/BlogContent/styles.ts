import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: #FFFFFF;
  width: 100%;
`

export const CardContainer = styled.div`
  width: 60%;

  padding: 0 2rem;
  margin-top: 4rem;
  
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(19, 19, 31, 0.20);
  border-radius: 5px;

  :last-child{
    margin-bottom: 4rem;
  }
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 1rem;

  font-family: Lexend Deca;
  font-style: normal;
  font-size: 1rem;
  color: #717171;

  
`

export const CardH1 = styled.h1`
  font-family: Lexend Deca;
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;

  padding: 0.5rem 0;
  color: #1A202C;
`

export const CardP = styled.p`
  font-family: Lexend Deca;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;

  padding-bottom: 1rem;

  color: #717171;
`