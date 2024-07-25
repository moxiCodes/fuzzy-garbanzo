import { MenuItem } from "@mui/material";
import { StyledSelect } from "./ThemeSelector.styled";
import { ThemeOption } from "../../themes/types";
import { useThemeContext } from "../../context/useThemeContext";

export const ThemeSelector = () => {
  const { theme, setThemeOption } = useThemeContext();

  return (
    <StyledSelect
      value={theme}
      onChange={(event) => setThemeOption(event.target.value as ThemeOption)}
    >
      <MenuItem value="light">Light</MenuItem>
      <MenuItem value="dark">Dark</MenuItem>
      <MenuItem value="birindar">Birindar</MenuItem>
      <MenuItem value="ugly">Ugly</MenuItem>
      <MenuItem value="bad">Bad</MenuItem>
    </StyledSelect>
  );
};
