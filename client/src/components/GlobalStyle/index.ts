import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: PixelOperator;
    overscroll-behavior: none;
  }

  body,
  #root {
    width: 100vw;
    height: 100vh;
  }

  img {
    width: 100%;
  }

  ul {
    padding-left: 40px;
  }

  p, b, i, button {
    font-size: 16px;
    -webkit-font-smoothing: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: var(--themeAccent1);
      * { color: var(--themeAccent1); }    
    }
  }

  h3, h2, h1 {
    font-family: PixelOperator8;
    -webkit-font-smoothing: none;
  }

  h3 {
    font-size: 21px;
  }
  
  h2 {
    font-size: 34px;
  }
  
  h1 {
    font-size: 55px;
  }
`;
