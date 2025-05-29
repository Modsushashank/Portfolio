import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'auto'; // Ensure body scrolling is enabled
  }, [location]);
  
  // Ensure body scrolling is restored when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    // Prevent body scroll when menu is open on mobile
    document.body.style.overflow = newIsOpen ? 'hidden' : 'auto';
  };
  
  // Function to handle navigation to home
  const navigateToHome = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={navigateToHome}>
          Portfolio
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu} aria-label="Toggle navigation menu">
          <div className={`hamburger ${isOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <div className={`nav-backdrop ${isOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
        
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={navigateToHome}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={toggleMenu}>
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`} onClick={toggleMenu}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/skills" className={`nav-link ${location.pathname === '/skills' ? 'active' : ''}`} onClick={toggleMenu}>
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={toggleMenu}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/resume" className={`nav-link ${location.pathname === '/resume' ? 'active' : ''}`} onClick={toggleMenu}>
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
