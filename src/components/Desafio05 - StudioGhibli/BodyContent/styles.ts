import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) { 
    flex-direction: column-reverse;
  }
`

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;

  @media (max-width: 700px) { 
    width: 100%;
  }
`
export const ContentContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: center;

  flex-direction: column;
  width: 50%;
  @media (max-width: 700px) { 
    width: 80%;
  }

  h2{
    font-family: Poppins, sans-serif;
    font-weight: bold;
    color: #F9F9F9;
    font-size: 2rem;
    letter-spacing: 0.03em;
    line-height: 1.8rem;
  }

  h1 {
    font-family: Poppins, sans-serif;
    font-weight: 900;
    font-size: 4.25rem;
    color: #F9F9F9;
    line-height: 4.62rem;
    padding: 1.5rem 0;
    @media (max-width: 700px) { 
      padding: 0.5rem 0;
    }
  }

  p{
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 29px;
    color: #F9F9F9;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
  
`
export const ButtonPlay = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 45px;
  width: 100%;
  
  color: #FFF;
  font-family: Poppins;
  font-weight: 500;
  text-decoration: none;

  background: #658E76;
  border: none;

  -webkit-clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  clip-path: polygon(8% 0%, 100% 0%, 91% 100%, 0% 100%);

  transition: filter 0.2s;

  &:hover{
    filter: opacity(0.5);
  }

  @media (max-width: 700px) { 
    width: 60%;
  }
`


export const ButtonTrailer = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  width: 100%;
  
  color: #FFF;
  font-family: Poppins;
  font-weight: 500;
  text-decoration: none;
  
  @media (max-width: 700px) { 
    display: none;
  }

  &:before{
    content: '';
    display: flex;
    position: absolute;
    height: 100%;
    width: 95%;
    transform: skew(-25deg);
    border: 3px solid #658E76;

    
  }
  transition: filter 0.2s;

  &:hover{
    filter: opacity(0.5);
  }

  
`

export const RightContainer = styled.div`
  width: 48%;
  @media (max-width: 700px) { 
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  img{
    width: 70%;
    @media (max-width: 700px) { 
      width: 70%;
      height: 40%;
    }
  }
`

