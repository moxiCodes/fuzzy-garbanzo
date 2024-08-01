import { StyledButton } from "../Button/StyledButton.styled";

export const ResultsPage = ({ onBack }: { onBack: () => void }) => {
  return (
    <>
      <h1>Results</h1>
      <StyledButton variant="outlined" onClick={onBack}>
        Back to Select
      </StyledButton>
    </>
  );
};
