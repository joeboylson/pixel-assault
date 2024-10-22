import { createGlobalStyle } from "styled-components";

export const GlobalTheme = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
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
`;
