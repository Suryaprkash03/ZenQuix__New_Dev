import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import ZQlogo from "../../img/ZQLogo1.png";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
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
        <div className="n-list">
          <ul>
            <li>
              <Link activeClass="active" to="Intro" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="partner" spy={true} smooth={true}>
                Partners
              </Link>
            </li>
            <li>
              <Link to="service" spy={true} smooth={true}>
                Services
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true}>
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
