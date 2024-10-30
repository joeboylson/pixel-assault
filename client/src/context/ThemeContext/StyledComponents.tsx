import styled from "styled-components";
import { Theme } from "./utils";

const DURATION_MS = 500;

export const StyledThemeWrapper = styled.div<{ theme: Theme }>`
  ${({ theme: { themeBackground, themeText, themeAccent1, themeAccent2 } }) => `
    --themeBackground: ${themeBackground};
    --themeText: ${themeText};
    --themeAccent1: ${themeAccent1};
    --themeAccent2: ${themeAccent2};
    `};

  * {
    transition-property: background-color, color;
    transition-duration: ${DURATION_MS}ms;
  }
`;
