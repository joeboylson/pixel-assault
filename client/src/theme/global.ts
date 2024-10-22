import { createGlobalStyle } from "styled-components";
import { getTheme } from ".";

export const GlobalTheme = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    color: ${getTheme().TEXT_COLOR}
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
