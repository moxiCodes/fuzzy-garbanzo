import { useEffect, useState } from "react";
import { Chef } from "../../types";
import { ChefsTable } from "../ChefsTable/ChefsTable";
import axios from "axios";
import { StyledButton } from "../Button/StyledButton.styled";

export const ChefSelectionPage = () => {
  const [chefs, setChefs] = useState<Chef[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  useEffect(() => {
    const getChefs = async () => {
      const { data: chefs } = await axios.get<Chef[]>("/available");
      setChefs(chefs);
    };

    getChefs();
  }, []);

  const availableChefs = chefs.filter(({ id }) => !selectedIds.includes(id));
  const selectedChefs = chefs.filter(({ id }) => selectedIds.includes(id));

  return (
    <>
      <h1>Select Chefs</h1>
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

      <StyledButton disabled={selectedChefs.length === 0} variant="outlined">
        Promote
      </StyledButton>
    </>
  );
};
