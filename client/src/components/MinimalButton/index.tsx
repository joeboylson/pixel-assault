import { WithChildren } from "../../types";
import styled, { css } from "styled-components";

export const MinimalButtonCSS = css`
  width: fit-content;
  padding: 0;
  margin: 0;
  border: 0;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

const StyledMinimalButton = styled.button`
  ${MinimalButtonCSS}
`;

type _props = WithChildren & {
  onClick: (() => void) | ((event: React.MouseEvent<HTMLElement>) => void);
  disabled?: boolean;
};

export default function MinimalButton({ onClick, children, disabled }: _props) {
  return (
    <StyledMinimalButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledMinimalButton>
  );
}
