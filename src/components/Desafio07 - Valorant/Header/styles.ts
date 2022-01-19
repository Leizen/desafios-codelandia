import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 15%;
  span{
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    color: #FFF;
  }
  @media (max-width: 768px) {
    padding: 2rem;
  }
  a:hover{
    filter: opacity(0.5);
  }
`