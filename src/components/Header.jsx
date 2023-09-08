import { styled } from "styled-components";
import { Link, useLocation } from "react-router-dom";

const StyledHeader = styled.header`
  background: white;
`;
const StyledContainer = styled.header`
  position: sticky;
  top: 0;
`;
const StyledLi = styled.li`
  &:hover {
    text-decoration: underline;
  }
`

function Header() {
  const currentPage = useLocation().pathname;

  return (
    <StyledContainer className="container">
      <StyledHeader className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <h2 className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-decoration-none">
          t-willis
        </h2>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <StyledLi className="nav-item">
            <Link
              to="/"
              className={currentPage === "/" ? "nav-link active" : "nav-link"}
            >
              About
            </Link>
          </StyledLi>
          <StyledLi className="nav-item">
            <Link
              to="/Portfolio"
              className={
                currentPage === "/Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </Link>
          </StyledLi>
          <StyledLi className="nav-item">
            <Link
              to="/Contact"
              className={
                currentPage === "/Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </Link>
          </StyledLi>
          <StyledLi className="nav-item">
            <Link
              to="/Resume"
              className={
                currentPage === "/Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </Link>
          </StyledLi>
        </ul>
      </StyledHeader>
    </StyledContainer>
  );
}

export default Header;
