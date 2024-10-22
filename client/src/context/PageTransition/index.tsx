import { useState } from "react";
import { WithChildren } from "../../types";
import {
  _voidFunction,
  pageTransitionDuration,
  PageTransitionProvider,
} from "./utils";
import { DefaultTransition } from "./StyledComponents";
import { compact, first, sample } from "lodash";

enum Transitions {
  DEFAULT,
}

export default function PageTransitionWrapper({ children }: WithChildren) {
  const [transition, setTransition] = useState<Transitions | null>(null);
  const [isContentHidden, setIsContentHidden] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const doDefaultTransition = () => {
    if (isTransitioning) return;

    type ft = (() => void) | number;

    const randomTheme = sample([
      "default",
      "mountain",
      "silicon",
      "mercenary",
      "plains",
    ]);

    console.log(randomTheme);

    const functions: ft[] = [
      () => console.log("START"),
      () => setTransition(Transitions.DEFAULT),
      100,
      () => setIsTransitioning(true),
      pageTransitionDuration,
      () => setIsContentHidden(true),
      10,
      () => localStorage.setItem("theme", randomTheme),
      1000,
      () => setIsContentHidden(false),
      10,
      () => setIsTransitioning(false),
      pageTransitionDuration,
      () => setTransition(null),
      () => console.log("END"),
    ];

    const f = (fs: ft[] | undefined) => {
      if (fs && fs.length > 0) {
        const _f = first(fs);
        if (_f) {
          if (typeof _f === "function") {
            _f();
            fs.shift();
            f(fs);
          }

          if (typeof _f === "number") {
            setTimeout(() => {
              fs.shift();
              f(fs);
            }, _f);
          }
        }
      }
    };

    f(functions);
  };

  const values = {
    isTransitioning,
  };

  const functions = {
    setIsTransitioning,
    doDefaultTransition,
  };

  const value = {
    ...values,
    ...functions,
  };

  const className = compact([isTransitioning && "active"]).join(" ");

  return (
    <PageTransitionProvider value={value}>
      {transition === Transitions.DEFAULT && (
        <DefaultTransition data-id="DefaultTransition" className={className}>
          <h1>PAGE TRANSITION, OOOOOOOHHHHHH YEEEEEAAAAAAH</h1>
        </DefaultTransition>
      )}

      {!isContentHidden && children}
    </PageTransitionProvider>
  );
}

export * from "./utils";
