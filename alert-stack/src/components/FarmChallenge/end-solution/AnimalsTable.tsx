import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Switch,
} from "@mui/material";
import { Animal } from "./types";

type AnimalsTableProps = {
  animals: Animal[];
};

export const AnimalsTable = ({ animals }: AnimalsTableProps) => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Worth</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Is Alive</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Always deconstruct!! */}
          {animals.map(
            ({ _id, age, animalType, gender, isAlive, name, worth }) => {
              return (
                // We use the id as our key as the api gives us this
                <TableRow key={_id}>
                  <TableCell>
                    <img
                      alt={animalType}
                      height={30}
                      src={`/animals/${animalType}.png`}
                    />
                  </TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>{age}</TableCell>
                  <TableCell>{worth}</TableCell>
                  <TableCell>{gender}</TableCell>
                  <TableCell>{animalType}</TableCell>
                  <TableCell>
                    <Switch checked={isAlive} disabled />
                  </TableCell>
                </TableRow>
              );
            }
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
