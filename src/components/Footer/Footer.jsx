import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { HiLink, HiOfficeBuilding } from "react-icons/hi";
import { IoLogoLinkedin, IoLogoWhatsapp, IoLogoYoutube, IoMdCall } from "react-icons/io";
import { RiAppsFill } from "react-icons/ri";
import { Link } from "react-scroll";
import logo from "../../img/ZQlogo2.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">

      <div className="footer-content">
        <div className="footer-columns">
          <div className="footer-column">
            <img className="footer-logo" src={logo} alt="Logo" />
            <div className="footer-icons">
              <a href="/" aria-label="Instagram">
                <AiFillInstagram size="30px" className="icons"/>
              </a>
              <a href="/" aria-label="WhatsApp">
                <IoLogoWhatsapp size="30px" className="icons" />
              </a>
              <a href="/" aria-label="Facebook">
                <IoLogoYoutube size="30px" className="icons"/>
              </a>
              <a href="/" aria-label="Twitter">
                <IoLogoLinkedin size="30px" className="icons"/>
              </a>
            </div>
            <h2 className="footer-heading">
              <IoMdCall /> Contact
            </h2>
            <div className="footer-phone">
              <a href="tel:919663026085" className="footer-phone-number">+91 9663026085</a>
            </div>
            <div className="footer-email-div">
            <a href="tel:919663026085" className="footer-email">Zenquixtech@gmail.com</a>
            </div>
          </div>
          <div className="footer-column">
            <h2 className="footer-heading">
              Useful Links
              <HiLink />
            </h2>
            <div className="footer-link-list">
              <Link to="Intro" className="footer-link">Home</Link>
              <Link to="/about-us" className="footer-link">About Us</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
          </div>
          <div className="footer-column">
            <h2 className="footer-heading">
              Services
              <RiAppsFill />
            </h2>
            <div className="footer-service-list">
              <Link to="/network-services" className="footer-link">Network Services</Link>
              <Link to="/cloud-services" className="footer-link">Cloud Services</Link>
              <Link to="/datacenter-services" className="footer-link">Datacenter Services</Link>
              <Link to="/end-user-services" className="footer-link">End User Services</Link>
              <Link to="/software-services" className="footer-link">Software Services</Link>
              <Link to="/consulting-services" className="footer-link">Consulting Services</Link>
              <Link to="/it-staff-augmentation" className="footer-link">IT Staff Augmentation</Link>
            </div>
          </div>
          <div className="footer-column">
            <h2 className="footer-heading">
              <HiOfficeBuilding /> Address
            </h2>
            <div className="footer-address">
              <p className="footer-address-text">
                Corporate Office: G1, XII XIII XIV PART, VGN Krona, Madha Town Extension, Gerugambakam, Chennai – 600122, Tamilnadu
              </p>
              <p className="footer-address-text">
                Branch Office: DSR Green Vista, ECC Road, Whitefield, Bangalore – 560066, Karnataka
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
  