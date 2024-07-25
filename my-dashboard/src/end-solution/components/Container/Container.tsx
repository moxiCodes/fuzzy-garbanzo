import { Header } from "../Header/Header";
import { StyledContainer, StyledNonHeader } from "./Container.styled";
import { Sidebar } from "../Sidebar/Sidebar";
import { Main } from "../Main/Main";

export const Container = () => {
  return (
    <StyledContainer>
      <Header />
      <StyledNonHeader>
        <Sidebar />
        <Main />
      </StyledNonHeader>
    </StyledContainer>
  );
};
