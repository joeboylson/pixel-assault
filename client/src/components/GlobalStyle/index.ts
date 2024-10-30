import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
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
  }

  a {
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: var(--themeAccent1);
      * {
      color: var(--themeAccent1);
      }
    }
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
