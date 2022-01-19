import styled from "styled-components";


export const Container = styled.div`
  display: flex;

  @media (max-width: 700px) { 
    flex-direction: column;
  }
`

export const LeftContainer = styled.div`
  display: flex;
  align-items: center
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 100%;

  padding-top: 10rem;
  @media (max-width: 780px){
    padding: 6rem 0;
    width: 100%;
  }
`

export const GameContent = styled.div`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;

  height: 100%;
  @media (max-width: 780px){
    align-items: center;
    width: 100%;
  }
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
  display: flex;
  align-items: center;
  justify-content: left;
  margin-top: 4rem;

  @media (max-width: 780px){
    display: flex;
    align-items: space-between;
    width: 100%;
  }
`
export const Character = styled.div`
  display: flex;
  align-items: left;
  justify-content:left;
  flex-direction: column;
  width: 100%;
  height: 100%;
  
  @media (max-width: 780px) { 
    width: 80%;
  } 

`

export const CharacterNameDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  span{
      font-family: Open Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      margin-top: 0.5rem;
      color: #FF4656;
    }
`

  export const CharacterPortraitBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
    img{
      position: absolute;
    }
  `

  export const CharacterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    width: 174px;
    height: 174px;
    
    margin-left: 1.5rem;
    margin-top: 1.5rem;
    background: #FFF;
  
    @media (max-width: 780px) { 
      width: 124px;
      height: 124px;
    } 
    
    -webkit-clip-path: polygon(10% 0%,100% 0%,100% 100%,0% 100%,0% 10%);
    clip-path: polygon(10% 0%,100% 0%,100% 100%,0% 100%,0% 10%);
    
    &:hover{
      margin-left: 0;
      margin-top: 0;
    }
  `

export const CharacterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 170px;
  background: #FF4656;
  
  @media (max-width: 780px) { 
      width: 120px;
      height: 120px;
    } 

  border: none;

  -webkit-clip-path: polygon(10% 0%,100% 0%,100% 100%,0% 100%,0% 10%);
  clip-path: polygon(10% 0%,100% 0%,100% 100%,0% 100%,0% 10%);
  
  img{
    width: 100%;
    height: 100%;
  }
`
export const SocialMidiaContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding-top: 14rem;
  height: 100%;

  
  a:not(:first-child) {
    margin-left: 6rem;
  }

  a:hover{
    filter: opacity(0.5);
  }
`

export const RightContainer = styled.div`
  display: flex; 
  justify-content: flex-end;
  width: 50%;
  height: 100%;

  img{
    justify-content: center;
    height: 820px;
  }

  @media (max-width: 780px) { 
      width: 100%;
      max-height: 100%;
    } 
`