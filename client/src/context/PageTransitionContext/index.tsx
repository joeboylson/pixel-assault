import { useState } from "react";
import { WithChildren } from "../../types";
import { PageTransitionProvider } from "./utils";
import { DefaultTransition } from "./StyledComponents";
import { compact } from "lodash";

enum Transitions {
  DEFAULT,
}

export default function PageTransitionWrapper({ children }: WithChildren) {
  const [transition, setTransition] = useState<Transitions | null>(null); // eslint-disable-line
  const [isContentHidden, setIsContentHidden] = useState(false); // eslint-disable-line
  const [isTransitioning, setIsTransitioning] = useState(false);

  const values = {
    isTransitioning,
  };

  const functions = {
    setIsTransitioning,
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
