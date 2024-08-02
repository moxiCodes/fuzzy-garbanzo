import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { ChefResult } from "../../types";
import { StyledTableContainer } from "../Table/StyledTableContainer.styled";

type ChefResultsTableProps = {
  chefResults: ChefResult[];
};

export const ChefResultsTable = ({ chefResults }: ChefResultsTableProps) => {
  return (
    <>
      <StyledTableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Job Title</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {chefResults.map(({ id, jobTitle, isSuccess, name }) => (
              <TableRow key={id}>
                <TableCell>{name}</TableCell>
                <TableCell>{jobTitle}</TableCell>
                <TableCell>
                  {isSuccess ? (
                    <img alt="success" width={16} src="/tick.png" />
                  ) : (
                    <img alt="fail" width={16} src="/cross.png" />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </>
  );
};
