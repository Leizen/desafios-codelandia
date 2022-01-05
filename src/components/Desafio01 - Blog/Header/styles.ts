import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 250px;

  background: linear-gradient(88.27deg, #574AE8 0%, #3EA1DB 100%);
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;

  span{
    width: 100%;
    height: 2rem;
    top: 3rem;

    font-family: Lexend Deca;
    font-style: normal;
    font-size: 1.5rem;
    line-height: 2rem;
    /* identical to box height */

    color: #FFFFFF;
  }

  span:last-child{
    width: 52px;
    height: 2rem;
    top: 3rem;

    font-family: Lexend Deca;
    font-style: normal;
    font-size: 1.5rem;
    line-height: 2rem;
    /* identical to box height */

    color: #FFFFFF;
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  margin-top: 4rem;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);

  img { 
    border-radius: 5px; 
    padding: 1rem;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 4rem;
  padding-left: 1rem;

  font-family: Lexend Deca;
  font-style: normal;
  font-size: 1.2rem;
  line-height: 2rem;
  color: #FFF;
  opacity: 0.5;

  background: transparent;
  border: none;
  outline: none;
  ::placeholder{
    color: #FFF;
  }
`
