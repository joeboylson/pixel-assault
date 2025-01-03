import { first } from "lodash";
import { TransitionChoreography } from "../types/transition";
import { css } from "styled-components";

export function doTransitionChoreography(c: TransitionChoreography) {
  if (c && c.length > 0) {
    const _f = first(c);

    if (_f) {
      /**
       * If item is function, run the function, then remove the item from the
       * list and do recursive.
       */
      if (typeof _f === "function") {
        _f();
        c.shift();
        doTransitionChoreography(c);
      }

      /**
       * If item is number, wait for duration, then remove the item from the
       * list and do recursive.
       */
      if (typeof _f === "number") {
        setTimeout(() => {
          c.shift();
          doTransitionChoreography(c);
        }, _f);
      }
    }
  }
}

export const WithColorTransitionCSS = css`
  transition-property: color;
  transition-duration: 500ms;
`;

export const WithBackgroundColorTransitionCSS = css`
  transition-property: background-color;
  transition-duration: 500ms;
`;
