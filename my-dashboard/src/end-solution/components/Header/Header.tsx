import { Box, Toolbar } from "@mui/material";
import { StyledAppBar, StyledHeading } from "./Header.styled";
import { ThemeSelector } from "../ThemeSelector/ThemeSelector";

export const Header = () => {
  return (
    <Box style={{ backgroundColor: "red" }}>
      <StyledAppBar position="sticky">
        <Toolbar>
          <StyledHeading variant="h6" sx={{ flexGrow: 1 }}>
            My theming challenge
          </StyledHeading>
          <ThemeSelector />
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};
