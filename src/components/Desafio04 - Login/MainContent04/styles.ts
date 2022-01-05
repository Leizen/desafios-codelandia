import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
`

export const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 100%;
  background: #F7FAFC;
  @media (max-width: 700px) { 
    display: none;
  }
`

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  width: 50%;
  padding-top: 15%;

  @media (max-width: 700px) { 
    width: 100%;
  }

  height: 100%;
  background: #FFFFFF;
`

export const ContentContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

width: 40%;
@media (max-width: 700px) { 
    width: 80%;
  }
`

export const WelcomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.5rem;
  color: #1A202C;
  
  font-family: Merriweather;
`

export const LoginInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  

  width: 100%;

  label{
    margin: 0.5rem 0;
    font-family: Lato;
  }

  input{
    line-height: 3rem;
    padding-left: 1rem;
    font-family: Lato;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid #E8E8E8;
  }
`

export const LoginExtraContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 1.5rem 0;
 
  label{
    margin-left: 0.5rem;
    font-family: Lato;
  }

  a{  
    font-family: Lato;
    text-decoration: none;
  }
  a:hover{
    filter: opacity(0.9);
  }
  a:visited {
    text-decoration: none;
  }
`

export const Checkbox = styled.div`
`

export const EnterButton = styled.button`
  line-height: 3rem;
  font-family: Lato;
  font-size: 1rem;
  background: #04C45C;
  border: none;
  border-radius: 5px;
  color: #FFFFFF;

  transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9)
    }
`

export const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 3rem;
  margin-top: 1rem;
  font-family: Lato;
  font-size: 1rem;
  background: #1A202C;
  border: none;
  border-radius: 5px;
  color: #FFFFFF;

  transition: filter 0.2s;

    &:hover{
      filter: opacity(0.9)
    }
    img{
      margin-right: 1rem;
    }
`

export const SignupContainer = styled.div`
  font-family: Lato;
  font-size: 1rem;
  padding-top: 12rem;

  a {
    text-decoration: none;
  }
  a:hover{
    filter: opacity(0.9);
  }
`