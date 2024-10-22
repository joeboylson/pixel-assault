import styled from "styled-components";
import { LayoutValues } from "../../enums/layout";
import { MinimalButtonCSS } from "../MinimalButton";

export const DialogWrapper = styled.div`
  width: 300vw;
  height: 300vh;
  position: fixed;
  top: -100vh;
  left: -100vw;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: +1;
  display: grid;
  place-items: center;
  transition-duration: ${LayoutValues.MODAL_TRANSITION_DURATION}ms;
  backdrop-filter: blur(15px);

  /* closed */
  opacity: 0;
  pointer-events: none;
  transform: translateY(5vh);

  /* open */
  &.is-open {
    opacity: 1;
    pointer-events: all;
    transform: translateY(0);
  }
`;

export const Dialog = styled.div`
  width: calc(100vw - 72px);
  height: calc(100vh - 72px - 72px);
  max-width: 500px;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.25);
  padding: 24px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 36px 1fr;
  gap: 36px;
  align-content: start;
  border-radius: 8px;
`;

export const DialogueExitButton = styled.button`
  ${MinimalButtonCSS}
  place-self: end;
`;
