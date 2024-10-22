import styled from "styled-components";
import { pageTransitionDuration } from "./utils";

export const DefaultTransition = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: +1;
  width: 100vw;
  height: 100vh;
  transition-duration: ${pageTransitionDuration}ms;
  backdrop-filter: blur(0px);
  display: grid;
  place-items: center;

  // not active
  background-color: rgba(0, 0, 0, 0);

  * {
    color: rgba(255, 255, 255, 0);
    transition-duration: ${pageTransitionDuration}ms;
  }

  // active
  &.active {
    background-color: rgba(0, 0, 0, 1);
    backdrop-filter: blur(10px);

    * {
      color: rgba(255, 255, 255, 1);
    }
  }
`;
