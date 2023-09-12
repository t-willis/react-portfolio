// import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledA = styled.a`
    text-decoration: ${props => props.$active ? 'underline' : 'none'};
`


export default function Navigation({ setCurrentPage, currentPage }) {
    const handleLink = (page) => {
        setCurrentPage(page);
    }
    return (
        <>
        <nav className="d-flex gap-4">
            <StyledA $active={currentPage === "/" } href="" onClick={() => handleLink('/')}>About</StyledA>
            <StyledA $active={currentPage === "portfolio" } href="#portfolio" onClick={() => handleLink('portfolio')}>Portfolio</StyledA>
            <StyledA $active={currentPage === "contact" } href="#contact" onClick={() => handleLink('contact')}>Contact</StyledA>
            <StyledA $active={currentPage === "resume" } href="#resume" onClick={() => handleLink('resume')}>Resume</StyledA>
        </nav>
        </>
    )
}

// Navigation.PropTypes = {
//     setCurrentPage: PropTypes.func,
// }