// import PropTypes from 'prop-types';
import { styled } from "styled-components";

const StyledA = styled.a`
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`

export default function Navigation({ setCurrentPage }) {
    const handleLink = (e, page) => {
        e.preventDefault();
        setCurrentPage(page);
    }
    return (
        <>
        <nav className="d-flex gap-4">
            <StyledA href="#/" onClick={(e) => handleLink(e, '/')}>About</StyledA>
            <StyledA href="#/portfolio" onClick={(e) => handleLink(e, 'portfolio')}>Portfolio</StyledA>
            <StyledA href="#/contact" onClick={(e) => handleLink(e, 'contact')}>Contact</StyledA>
            <StyledA href="#/resume" onClick={(e) => handleLink(e, 'resume')}>Resume</StyledA>
        </nav>
        </>
    )
}

// Navigation.PropTypes = {
//     setCurrentPage: PropTypes.func,
// }