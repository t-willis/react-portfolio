import { styled } from "styled-components";
import GithubLogo from "../assets/GitHubLogo.png";
import LinkedInLogo from "../assets/LinkedInLogo.png"

const StyledFooterContainer = styled.footer`
`;

function Footer() {
  return (
    <StyledFooterContainer className="container">
      <div className="footer d-flex flex-row align-items-center justify-content-center py-3 mb-4 border-top">
            <img className="mx-5" src={GithubLogo} alt="GitHub Link" height="50px"/>
            <img className="mx-5" src={LinkedInLogo} alt="LinkedIn Link" height="50px"/>
      </div>
    </StyledFooterContainer>
  );
}

export default Footer;
