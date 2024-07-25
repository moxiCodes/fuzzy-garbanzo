import { AppBar, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.primary} !important;
  transition: background-color 300ms linear !important;
  padding: 20px;
`;

export const StyledHeading = styled(Typography)`
  color: ${({ theme }) => theme.text} !important;
`;
