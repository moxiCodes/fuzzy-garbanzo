import { SortByOptions } from "./types";
import { useOptionInfo } from "./useOptionInfo";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

//We extend the sortByOptions to support the fact that they might select None (which is "")
export type SelectSortOrder = SortByOptions | "";

// Passing in the current name and an onchange, a classic "lifting state up" pattern
// https://react.dev/learn/sharing-state-between-components
type SortOrderProps = {
  order: SelectSortOrder;
  onSortOrderChanged: (SortOrder: SelectSortOrder) => void;
};

export const SortOrderSelect = ({
  onSortOrderChanged,
  order,
}: SortOrderProps) => {
  // This hook reduces complexity in the component buy doing all the fetching and stuff like that
  // and just fgiving us a nice list of type and display name that we can use for our Menu Item ropdowns
  const sortOrders = useOptionInfo<SortByOptions>("animal-sort-options");

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
      <InputLabel id="sort-order-select-label">Sort Order</InputLabel>
      <Select
        labelId="sort-order-select-label"
        value={order}
        onChange={(event) => {
          // The select box only knows this as a string, we need to provide a manual cast here
          // because we know that we only support four values "age" | "name" | "worth" | ""
          onSortOrderChanged(event.target.value as SelectSortOrder);
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {sortOrders.map(({ type, displayName }) => (
          <MenuItem key={type} value={type}>
            {displayName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
