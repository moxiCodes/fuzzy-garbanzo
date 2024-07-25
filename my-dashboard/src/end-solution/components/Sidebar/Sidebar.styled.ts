import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledSidebar = styled(Box)`
  height: 100%;
  width: 150px;
  background-color: ${({ theme }) => theme.sidebar};
  transition: background-color 300ms linear;
  color: ${({ theme }) => theme.text};
  padding: 20px;
`;
