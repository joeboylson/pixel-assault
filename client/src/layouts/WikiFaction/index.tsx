import styled from "styled-components";
import { Faction } from "../../types/sanity.types";
import { WikiPageProps } from "../../types/wiki";
import { Theme, useThemeContext } from "../../context/ThemeContext";
import { useEffect, useMemo } from "react";
import SpacedOneColumn from "../../components/SpacedOneColumn";

const Color = styled.div<{ color: string }>`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid white;
  background-color: ${(props) => props.color};
`;

const ColorsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 50px);
  gap: 12px;
`;

export default function WikiFaction({ document }: WikiPageProps) {
  const faction = (document as Faction) ?? null;
  const { changeTheme } = useThemeContext();

  const { name, colorAccentOne, colorAccentTwo, colorPageBackground } = faction;

  const factionTheme = useMemo(
    () =>
      ({
        themeAccent1: colorAccentOne?.hex,
        themeAccent2: colorAccentTwo?.hex,
        themeBackground: colorPageBackground?.hex,
      } as Partial<Theme>),
    [colorAccentOne, colorAccentTwo, colorPageBackground]
  );

  useEffect(() => {
    changeTheme(factionTheme);
  }, [changeTheme, factionTheme]);

  return (
    <SpacedOneColumn>
      <h2>{name}</h2>

      <ColorsWrapper>
        {Object.values(factionTheme).map((color) => {
          return <Color color={color} />;
        })}
      </ColorsWrapper>
    </SpacedOneColumn>
  );
}
