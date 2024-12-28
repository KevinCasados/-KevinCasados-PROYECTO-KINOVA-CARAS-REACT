import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
*, ::after, ::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scrollbar-width: none;
  }

  body {
    background-color: ${theme.backgroundColor};
    font-family: ${theme.fontFamily};
    font-weight: 400;
    color: ${theme.textColor};
    box-sizing: border-box;
  }

  h1 {
    margin-bottom: 1rem;
  }

  p {
    font-weight: 300;
    font-size: 0.729vw;
    margin-bottom: 1rem;
  }

  .img-100 {
    width: 46.012vw;
    height: auto;
  }

  .container {
    padding: 0 20px;
    max-width: 1840px;
    margin: 0 auto;
  } 

`;

export default GlobalStyle;
