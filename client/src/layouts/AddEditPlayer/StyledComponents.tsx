import styled from "styled-components";
import { MinimalButtonCSS } from "../../components/MinimalButton";

export const StyledAddEditPlayer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  input {
    border: 0;
    line-height: 32px;
    padding: 0 12px;
    outline: none;
    background-color: rgba(255, 255, 255, 0.25);
    color: white;
    width: calc(100% - 24px - 2px);
    margin-top: 4px;
    border-radius: 100px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;

export const StepWrapper = styled.div`
  border: 1px solid white;
  padding: 12px;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
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
    border-radius: 100px;
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
  grid-template-columns: 1fr;
`;

export const TeamButton = styled.button`
  ${MinimalButtonCSS}
  background-color: rgba(255, 255, 255, 0.25);
  border: 1px solid transparent;
  border-radius: 100px;
  margin-top: 4px;
  width: 100%;
  line-height: 32px;

  &.selected {
    border: 1px solid white;
  }
`;

export const FactionButtonWrapper = styled.div<{ backgroundsrc: string }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4px;
  border: 1px solid white;
  padding: 24px;
  position: relative;
  z-index: 2;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
    z-index: -1;
    background-image: url("${(props) => props.backgroundsrc}");
    background-position: top -30px right 0px;
    background-size: cover;
    opacity: 0.3;
  }
`;

export const FactionButton = styled.button`
  ${MinimalButtonCSS}
  background-color: rgba(255, 255, 255, 0.25);
  border: 1px solid transparent;
  width: 100%;
  line-height: 32px;

  display: grid;
  place-items: center;

  > div {
    display: grid;
    grid-template-columns: 32px 1fr;
    width: fit-content;
    align-items: center;
    gap: 8px;
  }

  &.selected {
    border: 1px solid white;
  }
`;
