import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--background-header);

    height: 6rem;
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  
`

export const StyledSpan = styled.span`
a{
  color: #FFF;
  font-style: Lexend Deca;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;

  transition: filter 0.2s;
  &:hover{
    filter: opacity(0.6)
  }
}
`

export const ContainerLogos = styled.div`
display: flex;
align-items: center;
justify-content: center;

img{
  margin-right: 1rem;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
}
`
