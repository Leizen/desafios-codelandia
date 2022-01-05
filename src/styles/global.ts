import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root{
    --background-header: #0C0C0C;
  }

  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  html{
    @media (max-width: 1080px){
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px){
      font-size: 87.5%; // 14px
    }
  }

  body{
    -webkit-font-smoothing: antialiased;
  }

  button{ 
    cursor: pointer;
  }
`