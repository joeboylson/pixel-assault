import { useState } from "react";
import { WithChildren } from "../../types";
import {
  _voidFunction,
  pageTransitionDuration,
  PageTransitionProvider,
} from "./utils";
import { DefaultTransition } from "./StyledComponents";
import { compact, first, sample } from "lodash";
import { ColorThemes } from "../../enums/theme";
import { TransitionChoreography } from "../../types/transition";
import { doTransitionChoreography } from "../../utils/transition";

enum Transitions {
  DEFAULT,
}

export default function PageTransitionWrapper({ children }: WithChildren) {
  const [transition, setTransition] = useState<Transitions | null>(null);
  const [isContentHidden, setIsContentHidden] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeTheme = (colorTheme: ColorThemes) => {
    if (isTransitioning) return;

    const c: TransitionChoreography = [
      () => setTransition(Transitions.DEFAULT),
      100,
      () => setIsTransitioning(true),
      pageTransitionDuration,
      () => setIsContentHidden(true),
      1,
      () => localStorage.setItem("theme", colorTheme),
      1,
      () => setIsContentHidden(false),
      10,
      () => setIsTransitioning(false),
      pageTransitionDuration,
      () => setTransition(null),
    ];

    doTransitionChoreography(c);
  };

  const values = {
    isTransitioning,
  };

  const functions = {
    setIsTransitioning,
    changeTheme,
  };

  const value = {
    ...values,
    ...functions,
  };

  const className = compact([isTransitioning && "active"]).join(" ");

  return (
    <PageTransitionProvider value={value}>
      {transition === Transitions.DEFAULT && (
        <DefaultTransition data-id="DefaultTransition" className={className} />
      )}

      {!isContentHidden && children}
    </PageTransitionProvider>
  );
}

export * from "./utils";
