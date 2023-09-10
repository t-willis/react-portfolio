import { styled } from "styled-components";
import Navigation from "./Navigation";
// import PropTypes from 'prop-types';

const StyledHeader = styled.header`
  background: white;
`;
const StyledContainer = styled.header`
  position: sticky;
  top: 0;
`;

export default function Header({ setCurrentPage }) {

  return (
    <StyledContainer className="container text-nowrap border-bottom d-flex align-items-center justify-content-around">
      <StyledHeader>
        <h2>
          t-willis
        </h2>
      </StyledHeader>
      <Navigation setCurrentPage={setCurrentPage}/>
    </StyledContainer>
  );
}

// Header.PropTypes = {
//   setCurrentPage: PropTypes.func,
// }