import { motion } from "framer-motion";
import React, { useContext } from "react";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import vector3 from '../../img/vector3.png';
import "./Intro.css";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span >Welcome to </span>
          <span>ZenQuix Technologies Pvt Ltd</span>
          <span>
          A leading provider of comprehensive IT services tailored to meet the diverse needs of businesses....
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button ">learn More</button>
        </Link>
        {/* social icons */}
        {/* <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div> */}
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy } alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={vector3}
          alt=""
          className='vector3'
        />
        <Link to="services" spy={true} smooth={true}>
          <motion.h1 
          initial={{ left: "36%" }}
          whileInView={{ left: "-1%" }}
          transition={transition}
          className="text1">Who <br />We Are ?</motion.h1></Link>
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={vector3}
          alt=""
          className='vect'
        />
        <Link to="services" spy={true} smooth={true}>
          <motion.h1 
          initial={{ left: "36%" }}
          whileInView={{ left: "-1%" }}
          transition={transition}
          className="text2">What <br />We Do ?</motion.h1></Link>
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div1"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-4%" }}
          transition={transition}
          src={vector3}
          alt=""
          className='vec'
        />
        <Link to="services" spy={true} smooth={true}>
          <motion.h1 
          initial={{ left: "36%" }}
          whileInView={{ left: "1%" }}
          transition={transition}
          className="text3">Why <br />ZenQuix <br /> Technologies ?</motion.h1></Link>
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
