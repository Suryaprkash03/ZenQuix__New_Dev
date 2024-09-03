import React from "react";
import { Link } from "react-scroll";
import ZQlogo from "../../img/ZQLogo1.png";
import "./Navbar.css";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">
          <img src={ZQlogo} alt="" className="logo" />
        </div>
        
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
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

export default navbar;
