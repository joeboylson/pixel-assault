import { Theme } from "../types/theme";

export * from "./global";
export * from "./icon";

export function getTheme() {
  const localStorageTheme = localStorage.getItem("theme");

  const defaultTheme: Theme = {
    BACKGROUND_COLOR: "#000333",
    BACKGROUND_COLOR_DARKER: "#000111",
    BACKGROUND_COLOR_LIGHTER: "#000999",
    TEXT_COLOR: "#EDEDED",
    ACCENT_1: "#FFCE28",
    ACCENT_2: "#FFE99F",
  };

  console.log({ localStorageTheme });

  switch (localStorageTheme) {
    case "plains":
      return {
        BACKGROUND_COLOR: "#101B0B",
        BACKGROUND_COLOR_DARKER: "#081103",
        BACKGROUND_COLOR_LIGHTER: "#72A741",
        TEXT_COLOR: "#EDEDED",
        ACCENT_1: "#72A741",
        ACCENT_2: "#D7D31C",
      } as Theme;

    case "silicon":
      return {
        BACKGROUND_COLOR: "#230F30",
        BACKGROUND_COLOR_DARKER: "#1B0C24",
        BACKGROUND_COLOR_LIGHTER: "#461C61",
        TEXT_COLOR: "#EDEDED",
        ACCENT_1: "#884DAE",
        ACCENT_2: "#CF2482",
      } as Theme;

    case "mountain":
      return {
        BACKGROUND_COLOR: "#1A1A24",
        BACKGROUND_COLOR_DARKER: "#15151D",
        BACKGROUND_COLOR_LIGHTER: "#e8ebfd",
        TEXT_COLOR: "#EDEDED",
        ACCENT_1: "#7788F0",
        ACCENT_2: "#E8EBFD",
      } as Theme;

    case "mercenary":
      return {
        BACKGROUND_COLOR: defaultTheme.BACKGROUND_COLOR,
        BACKGROUND_COLOR_DARKER: defaultTheme.BACKGROUND_COLOR_DARKER,
        BACKGROUND_COLOR_LIGHTER: defaultTheme.BACKGROUND_COLOR_LIGHTER,
        TEXT_COLOR: "#EDEDED",
        ACCENT_1: "#7973a2",
        ACCENT_2: "#7973a2",
      } as Theme;

    default:
      return defaultTheme;
  }
}
