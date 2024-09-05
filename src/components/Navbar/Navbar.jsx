import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import ZQlogo from "../../img/ZQLogo1.png";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`n-wrapper ${isScrolled ? "scrolled" : ""}`} id="Navbar">
      <div className="n-left">
        <div className="n-name">
          <img src={ZQlogo} alt="Logo" className="logo" />
        </div>
      </div>
      <div className="n-right">
        <button className="custom-navbar-toggler" onClick={toggleNavbar}>
          ☰
        </button>
        <div className={`custom-navbar-collapse ${isOpen ? "open" : ""}`}>
          <ul className="custom-nav-links">
            <li>
              <Link 
                activeClass="active" 
                to="Intro" 
                spy={true} 
                smooth={true} 
                className="custom-nav-link" 
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="services" 
                spy={true} 
                smooth={true} 
                className="custom-nav-link" 
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="partner" 
                spy={true} 
                smooth={true} 
                className="custom-nav-link" 
                onClick={() => setIsOpen(false)}
              >
                Partners
              </Link>
            </li>
            <li>
              <Link 
                to="service" 
                spy={true} 
                smooth={true} 
                className="custom-nav-link" 
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="contact" 
                spy={true} 
                smooth={true} 
                className="custom-nav-link" 
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
