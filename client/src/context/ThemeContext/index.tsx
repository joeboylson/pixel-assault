import { useCallback, useState } from "react";
import { WithChildren } from "../../types";
import { defaultTheme, Theme, ThemeProvider } from "./utils";
import { StyledThemeWrapper } from "./StyledComponents";

export default function ThemeWrapper({ children }: WithChildren) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const changeTheme = useCallback((_theme: Partial<Theme>) => {
    setTheme((currentTheme) => ({ ...currentTheme, ..._theme }));
  }, []);

  const useDefaultTheme = useCallback(() => setTheme(defaultTheme), []);

  const value = { theme, changeTheme, useDefaultTheme };

  return (
    <ThemeProvider value={value}>
      <StyledThemeWrapper data-id="StyledThemeWrapper" theme={theme}>
        {children}
      </StyledThemeWrapper>
    </ThemeProvider>
  );
}

export * from "./utils";
