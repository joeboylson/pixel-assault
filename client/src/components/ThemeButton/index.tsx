import MinimalButton from "../MinimalButton";
import styled from "styled-components";
import { CSSProperties } from "react";
import { ColorThemes } from "../../enums/theme";
import { getTheme, getThemeByName } from "../../theme";
import { usePageTransitionContext } from "../../context/PageTransition";

const themeBubbleSize = 24;

const ThemeBubble = styled.div`
  width: ${themeBubbleSize}px;
  height: ${themeBubbleSize}px;
  border-radius: ${themeBubbleSize}px;
`;

interface _props {
  theme: ColorThemes;
}

export default function ThemeButton({ theme }: _props) {
  const { changeTheme } = usePageTransitionContext();

  const currentTheme = getTheme();
  const themeValues = getThemeByName(theme);
  const { ACCENT_1, ACCENT_2, BACKGROUND_COLOR } = themeValues;

  const isActiveTheme = currentTheme === themeValues;

  const style = {
    background: `linear-gradient(45deg, ${ACCENT_1} 0%, ${ACCENT_1} 50%, ${ACCENT_2} 50%, ${ACCENT_2} 100%)`,
    border: `1px solid ${isActiveTheme ? "white" : BACKGROUND_COLOR}`,
  } as CSSProperties;

  const handleClick = () => changeTheme(theme);

  return (
    <MinimalButton onClick={handleClick}>
      <ThemeBubble style={style} />
    </MinimalButton>
  );
}
