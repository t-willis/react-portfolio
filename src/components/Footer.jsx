import { styled } from 'styled-components';
const StyledFooter = styled.footer`
text-align: center;
`

function Footer() {
    return (
        <div className="container">
        <StyledFooter className="footer d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-top">
            <div className="container">
            test
            </div>
        </StyledFooter>
        </div>
    );
}

export default Footer;