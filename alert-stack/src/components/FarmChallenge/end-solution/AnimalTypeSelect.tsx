import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { AnimalType } from "./types";
import { useOptionInfo } from "./useOptionInfo";

//We extend the animal type to support the fact that they might select None (which is "")
export type SelectAnimalType = AnimalType | "";

// Passing in the current name and an onchange, a classic "lifting state up" pattern
// https://react.dev/learn/sharing-state-between-components
type AnimalTypeSearchProps = {
  animalType: SelectAnimalType;
  onAnimalTypeChanged: (value: SelectAnimalType) => void;
};

export const AnimalTypeSelect = ({
  animalType,
  onAnimalTypeChanged,
}: AnimalTypeSearchProps) => {
  // This hook reduces complexity in the component buy doing all the fetching and stuff like that
  // and just fgiving us a nice list of type and display name that we can use for our Menu Item ropdowns
  const animalTypes = useOptionInfo<AnimalType>("/animal-types");

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
      <InputLabel id="animal-type-select-label">Animal Type</InputLabel>
      <Select
        onChange={(event) => {
          // The select box only knows this as a string, we need to provide a manual cast here
          // because we know that we only support six values "chicken" | "cow" | "goat" | "pig" | "sheep" | ""
          onAnimalTypeChanged(event.target.value as SelectAnimalType);
        }}
        value={animalType}
        labelId="animal-type-select-label"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {animalTypes.map(({ displayName, type }) => {
          return (
            <MenuItem key={type} value={type}>
              {displayName}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
