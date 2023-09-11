import PropTypes from 'prop-types';
import { styled } from 'styled-components';
import GitHubLogo from '../assets/GitHubLogo.png';
import ExternalLinkLogo from '../assets/ExternalLinkLogo.png'

const StyledImg = styled.img`
`
const StyledDiv = styled.div`
opacity: 0%;
transition: 0.3s;
&:hover {
  opacity: 100%;
  background-color: #ffffff7b;
  transition: 0.3s;
}

`

export default function Project(props) {
  return (
    <>
    <div className="container col-lg-6 col-md-12 flex-md-fill pb-4">
      <div className="card bg-dark text-black">
        <StyledImg src={props.srcUrl} className="card-img" alt="{props.description}" />
        <StyledDiv className="card-img-overlay">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text">
            {props.description}
          </p>
          <div className="d-flex gap-4">
          <a href={props.gitLink} target="_blank" rel="noreferrer">
            <img src={GitHubLogo} height="35px" />
          </a>
          {props.deployedLink !== "N/A" && 
          <a href={props.deployedLink} target="_blank" rel="noreferrer">
            <img src={ExternalLinkLogo} height="35px" />
          </a>
          }
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
}