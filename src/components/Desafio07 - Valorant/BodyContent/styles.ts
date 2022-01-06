import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`

export const LeftContainer = styled.div`
  display: flex;
  align-items: center
  justify-content: center;
  width: 50%;
  height: 100%;

  padding: 10rem 0;
`

export const GameContent = styled.div`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;

  height: 100%;
`

export const GameName = styled.h1`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 4rem;
  line-height: 76px;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #fff;
`
export const CharactersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;
`
export const Character = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  

  div{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 174px;
    height: 174px;
    background: #FFF;

    //-webkit-clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
    //clip-path: polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
  span{
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    margin-top: 0.5rem;
    color: #FF4656;
  }
`

export const CharacterButton = styled.button`
  width: 170px;
  height: 170px;
  background: #FF4656;

  border: none;

  // -webkit-clip-path: polygon(2% 0%, 100% 0%, 100% 100%, 0% 100%);
  clip-path: inset(10% 10% 10% 10% round 20%, 20%);
  
  img{
    width: 100%;
    height: 100%;
  }
`
export const SocialMidiaContainer = styled.div``

export const RightContainer = styled.div`
  display: flex; 
  justify-content: flex-end;
  width: 50%;
  height: 100%;

  img{
    height: auto !important;
  }
`