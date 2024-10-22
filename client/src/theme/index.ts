import { ColorThemes } from "../enums/theme";
import { Theme } from "../types/theme";

export const defaultTheme: Theme = {
  BACKGROUND_COLOR: "#000333",
  BACKGROUND_COLOR_DARKER: "#000111",
  BACKGROUND_COLOR_LIGHTER: "#000999",
  TEXT_COLOR: "#EDEDED",
  ACCENT_1: "#FFCE28",
  ACCENT_2: "#FFE99F",
};

export const plainsTheme: Theme = {
  BACKGROUND_COLOR: "#101B0B",
  BACKGROUND_COLOR_DARKER: "#081103",
  BACKGROUND_COLOR_LIGHTER: "#72A741",
  TEXT_COLOR: "#EDEDED",
  ACCENT_1: "#72A741",
  ACCENT_2: "#D7D31C",
};

export const siliconTheme: Theme = {
  BACKGROUND_COLOR: "#230F30",
  BACKGROUND_COLOR_DARKER: "#1B0C24",
  BACKGROUND_COLOR_LIGHTER: "#461C61",
  TEXT_COLOR: "#EDEDED",
  ACCENT_1: "#884DAE",
  ACCENT_2: "#CF2482",
};

export const mountainTheme: Theme = {
  BACKGROUND_COLOR: "#1A1A24",
  BACKGROUND_COLOR_DARKER: "#15151D",
  BACKGROUND_COLOR_LIGHTER: "#e8ebfd",
  TEXT_COLOR: "#EDEDED",
  ACCENT_1: "#7788F0",
  ACCENT_2: "#E8EBFD",
};

export const mercenaryTheme: Theme = {
  BACKGROUND_COLOR: defaultTheme.BACKGROUND_COLOR,
  BACKGROUND_COLOR_DARKER: defaultTheme.BACKGROUND_COLOR_DARKER,
  BACKGROUND_COLOR_LIGHTER: defaultTheme.BACKGROUND_COLOR_LIGHTER,
  TEXT_COLOR: "#EDEDED",
  ACCENT_1: "#7973a2",
  ACCENT_2: "#7973a2",
};

export function getTheme() {
  const localStorageTheme = localStorage.getItem("theme");

  switch (localStorageTheme) {
    case ColorThemes.PLAINS:
      return plainsTheme;

    case ColorThemes.SILICON:
      return siliconTheme;

    case ColorThemes.MOUNTAIN:
      return mountainTheme;

    case ColorThemes.MERCENARY:
      return mercenaryTheme;

    case ColorThemes.DEFAULT:
      return defaultTheme;

    default:
      return defaultTheme;
  }
}
