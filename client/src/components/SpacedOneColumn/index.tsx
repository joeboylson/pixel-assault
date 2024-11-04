import styled, { css } from "styled-components";

export const SpacedOneColumnCSS = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  align-content: start;
`;

const SpacedOneColumn = styled.div<{ extraSpacing?: boolean }>`
  ${SpacedOneColumnCSS}

  ${(props) => (props.extraSpacing ? `gap: 144px` : "")};
`;

export default SpacedOneColumn;
