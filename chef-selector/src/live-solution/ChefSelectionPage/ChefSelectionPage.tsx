import { useState } from "react";
import { ChefsTable } from "../ChefsTable/ChefsTable";
import { StyledButton } from "../Button/StyledButton.styled";
import { useChefs } from "./useChefs";
import { ChefJobTitle } from "../../types";
import { JobTitleFilter } from "../JobTitleFilter/JobTitleFilter";

type ChefSelectionPageProps = {
  onPromote: (promotedIds: number[]) => void;
};

export const ChefSelectionPage = ({ onPromote }: ChefSelectionPageProps) => {
  const chefs = useChefs();
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [filter, setFilter] = useState<ChefJobTitle | undefined>(undefined);

  const availableChefs = chefs.filter(
    ({ id, jobTitle }) =>
      (!selectedIds.includes(id) && filter === undefined) || filter === jobTitle
  );
  const selectedChefs = chefs.filter(({ id }) => selectedIds.includes(id));

  return (
    <>
      <h1>Select Chefs</h1>
      <JobTitleFilter jobTitle={filter} onJobTitleChanged={setFilter} />
      <ChefsTable
        chefs={availableChefs}
        buttonText={"Select"}
        onSelected={(ids) =>
          setSelectedIds((currentSelectIds) => [...currentSelectIds, ...ids])
        }
      />
      <ChefsTable
        chefs={selectedChefs}
        buttonText={"Deselect"}
        onSelected={(ids) =>
          setSelectedIds((currentSelectIds) =>
            currentSelectIds.filter((id) => !ids.includes(id))
          )
        }
      />

      <StyledButton
        onClick={() => onPromote(selectedIds)}
        disabled={selectedChefs.length === 0}
        variant="outlined"
      >
        Promote
      </StyledButton>
    </>
  );
};
