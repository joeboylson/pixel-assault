import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { ColorThemes } from "../../enums/theme";

// #region helpers
export const _voidFunction = () => {};
export const pageTransitionDuration = 300;
// #endregion

// #region context value type and default value
export type PageTransitionContextValue = {
  isTransitioning: boolean;
  setIsTransitioning: Dispatch<SetStateAction<boolean>>;
  changeTheme: (colorTheme: ColorThemes) => void;
};

const contextDefaultValue: PageTransitionContextValue = {
  isTransitioning: false,
  setIsTransitioning: _voidFunction,
  changeTheme: _voidFunction,
};
// #endregion

// #region react context usage
export const PageTransitionContext = createContext(contextDefaultValue);
export const PageTransitionProvider = PageTransitionContext.Provider;
export const usePageTransitionContext = () => useContext(PageTransitionContext);
// #endregion
