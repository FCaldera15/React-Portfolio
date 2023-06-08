import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Footer from './Footer';
import "bootstrap/dist/css/bootstrap.min.css";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // render the new page when clicked on
  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    return <About />;
  };

  // change from current page to the new page
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
