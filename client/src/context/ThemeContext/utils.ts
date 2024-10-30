import { createContext, useContext } from "react";

export type Theme = {
  themeBackground: string;
  themeText: string;
  themeAccent1: string;
  themeAccent2: string;
};

export const defaultTheme: Theme = {
  themeBackground: "#000333",
  themeText: "#EDEDED",
  themeAccent1: "#FFCE28",
  themeAccent2: "#FFE99F",
};

export type ThemeContextValue = {
  theme: Theme;
  changeTheme: (partialTheme: Partial<Theme>) => void;
  useDefaultTheme: () => void;
};

const contextDefaultValue: ThemeContextValue = {
  theme: defaultTheme,
  changeTheme: (partialTheme: Partial<Theme>) => {},
  useDefaultTheme: () => {},
};

export const ThemeContext = createContext(contextDefaultValue);
export const ThemeProvider = ThemeContext.Provider;
export const useThemeContext = () => useContext(ThemeContext);
