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

  p, b, i, a, button {
    font-size: 20px;
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
  }

  h3 {
    font-size: 25px;
  }
  
  h2 {
    font-size: 39px;
  }
  
  h1 {
    font-size: 59px;
  }
`;
