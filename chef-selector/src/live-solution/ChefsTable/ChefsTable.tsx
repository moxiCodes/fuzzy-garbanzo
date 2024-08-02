import {
  Box,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { StyledButton } from "../Button/StyledButton.styled";
import { StyledTableContainer } from "../Table/StyledTableContainer.styled";
import { Chef } from "../../types";
import { useState } from "react";
import { DisplayMichelinStars } from "./DisplayMichelinStars";

type ChefsTableProps = {
  buttonText: string;
  chefs: Chef[];
  onSelected: (selectedIds: number[]) => void;
};

export const ChefsTable = ({
  buttonText,
  chefs,
  onSelected,
}: ChefsTableProps) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const onBoxChecked = (chefId: number, isChecked: boolean) => {
    if (isChecked) {
      setSelectedIds((previous) => [...previous, chefId]);
    } else {
      setSelectedIds((previous) => previous.filter((id) => id !== chefId));
    }
  };

  return (
    <>
      <StyledTableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Job Title</TableCell>
              <TableCell>Stars</TableCell>
              <TableCell>Learning Progress</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {chefs.map(
              ({ id, jobTitle, michelinStars, name, trainingProgress }) => (
                <TableRow key={id}>
                  <TableCell>{name}</TableCell>
                  <TableCell>{jobTitle}</TableCell>
                  <TableCell>
                    <DisplayMichelinStars stars={michelinStars} />
                  </TableCell>
                  <TableCell>{trainingProgress}</TableCell>
                  <TableCell>
                    <Checkbox
                      onChange={(event) =>
                        onBoxChecked(id, event.target.checked)
                      }
                    />
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </StyledTableContainer>
      <Box>
        <StyledButton
          onClick={() => {
            onSelected(selectedIds);
            //We need to clear the selection every time we click because those people will be removed and aren't selectable
            setSelectedIds([]);
          }}
          disabled={selectedIds.length === 0}
          variant="outlined"
        >
          {buttonText}
        </StyledButton>
      </Box>
    </>
  );
};
