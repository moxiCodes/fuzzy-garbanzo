import { useContext } from "react";
import { MyThemeContext } from "./ThemeContextProvider";

export const useThemeContext = () => {
  const context = useContext(MyThemeContext);

  if (context === undefined) {
    throw Error("useThemeContext must be used within a ThemeContextProvider");
  }

  return context;
};
