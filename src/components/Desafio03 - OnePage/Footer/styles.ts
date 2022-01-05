import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 750px;

  background: #D7D5FF;
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 30%;

  @media (max-width: 700px) { 
    width: 80%;
  }
`
export const ContainerH1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60%;


    h1{
      font-family: Merriweather;
      font-style: normal;
      font-weight: normal;
      font-size: 2rem;
      padding-bottom: 4rem;
    }
`

export const FormContainer = styled.div`

width: 100%;

input{
  width: 100%;
  height: 65px;
  border-radius: 6px;
  padding-left: 1rem;
  font-size: 1.5rem;
  border: none;
  
  ::placeholder{
    font-size: 1.5rem;
    padding-left: 1rem;
  }
  
  :not(:first-child){
    margin-top: 1rem;
  }
} 

  .lastInput{
    height: 165px;
  }
`

export const Button = styled.button`
  margin-top: 1rem;
  width: 100%;
  height: 50px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;
  background: #6C63FF;
  border-radius: 5px;
  border: none;

  color: #FFFFFF;
`