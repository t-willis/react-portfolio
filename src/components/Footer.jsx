import { styled } from "styled-components";
import GithubLogo from "../assets/GitHubLogo.png";
import LinkedInLogo from "../assets/LinkedInLogo.png";
import StackOverflowLogo from "../assets/StackOverflowLogo.png";

const StyledFooterContainer = styled.footer``;

const StyledImg = styled.img`
  opacity: 60%;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    opacity: 100%;
    scale: 125%;
  }
`;

function Footer() {
  return (
    <StyledFooterContainer className="container">
      <div className="footer d-flex flex-row align-items-center justify-content-center py-4 mb-4 border-top">
        <a href="https://github.com/t-willis" target="_blank" rel="noreferrer">
          <StyledImg
            className="mx-5"
            src={GithubLogo}
            alt="GitHub Link"
            height="50px"
          />
        </a>
        <a href="https://www.linkedin.com/in/taylor-willis-967721273/" target="_blank" rel="noreferrer">
          <StyledImg
            className="mx-5"
            src={LinkedInLogo}
            alt="LinkedIn Link"
            height="50px"
          />
        </a>
        <a href="https://stackoverflow.com/users/22535124/t-willis" target="_blank" rel="noreferrer">
          <StyledImg
            className="mx-5"
            src={StackOverflowLogo}
            alt="Stack Overflow Link"
            height="50px"
          />
        </a>
      </div>
    </StyledFooterContainer>
  );
}

export default Footer;
