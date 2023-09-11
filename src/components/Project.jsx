import PropTypes from "prop-types";
import { styled } from "styled-components";
import GitHubLogo from "../assets/GitHubLogo.png";
import ExternalLinkLogo from "../assets/ExternalLinkLogo.png";

const StyledDiv = styled.div`
  opacity: 0%;
  transition: 0.3s;
  &:hover {
    opacity: 100%;
    background-color: #ffffffb7;
    transition: 0.3s;
  }
`;
const StyledImg = styled.img`
  opacity: 100%;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    scale: 125%;
  }
`;

export default function Project(props) {
  return (
    <>
      <div className="container col-lg-6 col-md-12 flex-md-fill pb-4">
        <div className="card bg-dark text-black">
          <img
            src={props.srcUrl}
            className="card-img"
            alt="{props.description}"
          />
          <StyledDiv className="card-img-overlay d-flex-col hide-overflow">
            <h4 className="card-title fw-bold text-center">{props.title}</h4>
            <h6 className="card-text text-center">{props.description}</h6>
            <div className="d-flex gap-4 justify-content-center">
              <a href={props.gitLink} target="_blank" rel="noreferrer">
                <StyledImg src={GitHubLogo} height="35px" />
              </a>
              {props.deployedLink !== "N/A" && (
                <a href={props.deployedLink} target="_blank" rel="noreferrer">
                  <StyledImg src={ExternalLinkLogo} height="35px" />
                </a>
              )}
            </div>
          </StyledDiv>
        </div>
      </div>
    </>
  );
}

Project.propTypes = {
  srcUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
