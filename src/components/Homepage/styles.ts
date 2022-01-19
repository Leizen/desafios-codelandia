import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100vh;
  background: #000;
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 26rem;
  height: 46rem;

  border-radius: 0.5rem;
  background: #202024;

  h1{
    margin-top: 1rem;
    font-family: Montserrat;
    color: #FFF;
  }

  p{
    color: #FFF;
  }

  h2{
    margin-top: 4rem;
    font-family: Montserrat;
    color: #FFF;
  }
`

export const ContainerLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  margin-top: 1rem;

img{
  margin-right: 1rem;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
}
`

export const ChallengesList = styled.ul`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;

  margin-top: 2rem;

  li {
    color: #FFF;
    font-family: Montserrat;

    a{
      text-decoration: none;
      color: #FFF;

      a:hover{
        filter: opacity(0.2)
      }
    }
    
    
    :not(first-child){
      margin-top: 1rem;
    }
  }
`