import { useEffect, useState } from "react";
import { StyledButton } from "../Button/StyledButton.styled";
import axios from "axios";
import { ChefResult } from "../../types";
import { ChefResultsTable } from "../ChefResultsTable/ChefResultsTable";

type ResultsPageProp = {
  promotedIds: number[];
  onBack: () => void;
};

export const ResultsPage = ({ onBack, promotedIds }: ResultsPageProp) => {
  const [results, setResults] = useState<ChefResult[]>([]);

  useEffect(() => {
    const getResults = async () => {
      const { data: chefResults } = await axios.post<ChefResult[]>(
        "/promote",
        promotedIds
      );
      setResults(chefResults);
    };

    getResults();
  }, [promotedIds]);

  return (
    <>
      <h1>Results</h1>
      <ChefResultsTable chefResults={results} />
      <StyledButton variant="outlined" onClick={onBack}>
        Back to Select
      </StyledButton>
    </>
  );
};
