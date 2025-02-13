import styled from "styled-components";
import { MinimalButtonCSS } from "../../components/MinimalButton";

export const StyledAddEditPlayer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  input {
    border: 1px solid white;
    line-height: 32px;
    padding: 0 12px;
    outline: none;
    background-color: transparent;
    color: white;
    width: calc(100% - 24px - 2px);
    margin-top: 4px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;

export const StyledTeamSelection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const TabsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;

  button {
    width: 100%;
    text-align: center;
    line-height: 32px;
    position: relative;
    z-index: 2;

    &:disabled {
      opacity: 0.25;
      cursor: not-allowed;
    }
  }

  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.25);
    height: 32px;
    width: 50%;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  }

  &.highlight-left::after {
    transform: translateX(0);
  }

  &.highlight-right::after {
    transform: translateX(100%);
  }
`;

export const TeamButtonWrapper = styled.div`
  display: grid;
  grid-template-column: 1fr;
  gap: 4px;
`;

export const TeamButton = styled.button`
  ${MinimalButtonCSS}
  background-color: transparent;
  border: 1px solid transparent;
  margin-top: 4px;
  width: 100%;
  line-height: 32px;

  &.selected {
    border: 1px solid white;
  }
`;

export const FactionButtonWrapper = styled.div`
  display: grid;
  grid-template-column: 1fr;
  gap: 4px;
  border: 1px solid white;
  padding: 24px;
`;

export const FactionButton = styled.button`
  ${MinimalButtonCSS}
  background-color: transparent;
  border: 1px solid transparent;
  width: 100%;
  line-height: 32px;

  &.selected {
    border: 1px solid white;
  }
`;
