import styled from "styled-components";
import { Theme } from "./utils";

export const StyledThemeWrapper = styled.div<{ theme: Theme }>`
  ${({ theme: { themeBackground, themeText, themeAccent1, themeAccent2 } }) => `
    --themeBackground: ${themeBackground};
    --themeText: ${themeText};
    --themeAccent1: ${themeAccent1};
    --themeAccent2: ${themeAccent2};
    `};
`;
