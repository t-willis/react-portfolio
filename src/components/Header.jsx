import { styled } from "styled-components";
import Navigation from "./Navigation";

const StyledHeader = styled.header`
  background: white;
`;
const StyledContainer = styled.header`
  position: sticky;
  top: 0;
`;

export default function Header({ setCurrentPage }) {

  return (
    <StyledContainer className="container">
      <StyledHeader className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <h2 className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-decoration-none">
          t-willis
        </h2>
        <Navigation setCurrentPage={setCurrentPage}/>
      </StyledHeader>
    </StyledContainer>
  );
}