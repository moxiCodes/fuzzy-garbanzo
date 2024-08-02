import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { useJobTitles } from "./useJobTitles";
import { StyledJobTitleFilter } from "./JobTitleFilter.styled";
import { ChefJobTitle } from "../../types";

type JobTitleFilterProps = {
  jobTitle: ChefJobTitle | undefined;
  onJobTitleChanged: (value?: ChefJobTitle) => void;
};

export const JobTitleFilter = ({
  jobTitle,
  onJobTitleChanged,
}: JobTitleFilterProps) => {
  const jobTitles = useJobTitles();

  return (
    <>
      <FormControl>
        <InputLabel id="job-title-filter">Job Title</InputLabel>
        <StyledJobTitleFilter
          autoWidth
          label="Job Title"
          labelId="job-title-filter"
          onChange={(event) => {
            const chefJobTitle = event.target.value as ChefJobTitle | "";
            onJobTitleChanged(chefJobTitle === "" ? undefined : chefJobTitle);
          }}
          value={jobTitle ?? ""}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {jobTitles.map((jobTitle) => (
            <MenuItem key={jobTitle} value={jobTitle}>
              {jobTitle}
            </MenuItem>
          ))}
        </StyledJobTitleFilter>
      </FormControl>
    </>
  );
};
