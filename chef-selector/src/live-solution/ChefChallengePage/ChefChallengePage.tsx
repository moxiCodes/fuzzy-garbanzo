import { useState } from "react";
import { ChefSelectionPage } from "../ChefSelectionPage/ChefSelectionPage";
import { ResultsPage } from "../ResultsPage/ResultsPage";
import { StyledChefChallengePage } from "./ChefChallengePage.styled";

export const ChefChallengePage = () => {
  const [chefIds, setChefIds] = useState<number[]>([]);

  return (
    <StyledChefChallengePage>
      {chefIds.length === 0 ? (
        <ChefSelectionPage onPromote={setChefIds} />
      ) : (
        <ResultsPage onBack={() => setChefIds([])} promotedIds={chefIds} />
      )}
    </StyledChefChallengePage>
  );
};
