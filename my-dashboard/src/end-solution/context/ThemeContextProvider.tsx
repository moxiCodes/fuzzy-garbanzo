import { createContext, ProviderProps, useState } from "react";
import { ThemeOption } from "../themes/types";
import { ThemeProvider } from "styled-components";
import { themeMappings } from "../themes/themes";

type ThemeContextState = {
  theme: ThemeOption;
  setThemeOption: (theme: ThemeOption) => void;
};

export const MyThemeContext = createContext<ThemeContextState | undefined>(
  undefined
);

export const ThemeContextProvider = ({
  children,
  value,
}: ProviderProps<{ theme: ThemeOption }>) => {
  const [theme, setTheme] = useState<ThemeOption>(value.theme);

  return (
    <MyThemeContext.Provider value={{ theme, setThemeOption: setTheme }}>
      <ThemeProvider theme={themeMappings[theme]}>{children}</ThemeProvider>
    </MyThemeContext.Provider>
  );
};
