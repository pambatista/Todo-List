
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    outline: 0;
  }

  body{
    background: #0476D9;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smothing: antialiased !important;
  }
`
export default GlobalStyle
