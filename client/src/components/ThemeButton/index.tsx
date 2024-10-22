// background: linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);

import { CSSProperties } from "react";
import { ColorThemes } from "../../enums/theme";
import MinimalButton from "../MinimalButton";

interface _props {
  theme: ColorThemes;
}

export default function ThemeButton({ theme }: _props) {
  const style = {
    background: `linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);`,
  } as CSSProperties;

  return (
    <MinimalButton onClick={() => {}}>
      <div style={style}></div>
    </MinimalButton>
  );
}
