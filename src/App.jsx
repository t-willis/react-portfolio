import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function App() {
  const [currentPage, setCurrentPage] = useState("/");
  return (
    <>
      <Header setCurrentPage={setCurrentPage} />
      <main className="container">
        {currentPage === "/" && <About setCurrentPage={setCurrentPage} />}
        {currentPage === "portfolio" && <Portfolio />}
        {currentPage === "contact" && <Contact />}
        {currentPage === "resume" && <Resume />}
      </main>
      <Footer />
    </>
  );
}
