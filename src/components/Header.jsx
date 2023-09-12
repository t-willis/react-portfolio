import { styled } from "styled-components";
import Navigation from "./Navigation";
// import PropTypes from 'prop-types';

const StyledHeader = styled.header`
`;
const StyledContainer = styled.header`
  background: white;
  position: sticky;
  top: 0;
  z-index: 2;
`;

export default function Header({ setCurrentPage, currentPage }) {

  return (
    <StyledContainer className="container p-4 text-nowrap border-bottom d-lg-flex align-items-lg-center justify-content-lg-around d-md-flex justify-content-md-around align-items-md-center d-sm-flex align-items-sm-center justify-content-sm-around">
      <StyledHeader>
        <h2>
          t-willis
        </h2>
      </StyledHeader>
      <Navigation setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </StyledContainer>
  );
}

// Header.PropTypes = {
//   setCurrentPage: PropTypes.func,
// }