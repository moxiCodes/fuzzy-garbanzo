import { FormControl, TextField } from "@mui/material";

// Passing in the current name and an onchange, a classic "lifting state up" pattern
// https://react.dev/learn/sharing-state-between-components
type NameSearchProps = {
  name: string;
  onChange: (value: string) => void;
};

export const NameSearch = ({ name, onChange }: NameSearchProps) => {
  return (
    <FormControl
      variant="standard"
      sx={{ m: 1, minWidth: 300, display: "block" }}
    >
      <TextField
        label="Name"
        value={name}
        variant="outlined"
        onChange={(event) => onChange(event.target.value)}
      />
    </FormControl>
  );
};
