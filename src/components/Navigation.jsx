export default function Navigation({ setCurrentPage }) {
    const handleLink = (e, page) => {
        e.preventDefault();
        setCurrentPage(page);
    }
    return (
        <>
        <nav>
            <a href="#/" onClick={(e) => handleLink(e, '/')}>About</a>
            <a href="#/portfolio" onClick={(e) => handleLink(e, 'portfolio')}>Portfolio</a>
            <a href="#/contact" onClick={(e) => handleLink(e, 'contact')}>Contact</a>
            <a href="#/resume" onClick={(e) => handleLink(e, 'resume')}>Resume</a>
        </nav>
        </>
    )
}
