import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { BiBullseye } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { themeContext } from "../../Context";
import blue_circle_1 from "../../img/blue_circle_1.png";
import red_circle_1 from "../../img/red_circle_1.png";
import yellow_circle_1 from "../../img/yellow_circle_1.png";
import CircleModal from "../Modal/CircleModal";
import "./Experience.css";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleCircleClick = (content) => {
    setModalContent(content);
    setModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <div className="experience" id="experience">
      <motion.img
        src={blue_circle_1}
        initial={{ rotate: 50 }}
        whileInView={{ rotate: 360 }}
        viewport={{ margin: "-40px" }}
        transition={{ duration: 3.5, type: "spring" }}
        className="achievement"
      />
      {/* <div className="circle">
          <div className="circle_inner">
            <BiBullseye className="icon" />
            <span>Our</span>
            <span>Mission</span>
          </div>
        </div>   */}

      <motion.img
        src={red_circle_1}
        initial={{ rotate: 50 }}
        whileInView={{ rotate: 360 }}
        viewport={{ margin: "-40px" }}
        transition={{ duration: 3.5, type: "spring" }}
        className="achievement1"      />
      {/* <div className="circle1">
          <div className="circle_inner">
            <BsEyeFill className="icon" />
            <span>Our</span>
            <span>Vision</span>
          </div>
        </div> */}

      <motion.img
        src={yellow_circle_1}
        initial={{ rotate: 50 }}
        whileInView={{ rotate: 360 }}
        viewport={{ margin: "-40px" }}
        transition={{ duration: 3.5, type: "spring" }}
        className="achievement2"
      />
      <div className="circle_inner2"onClick={() => handleCircleClick("Our Vision Content")}>
        <BiBullseye className="icon" />
        <span>Our</span>
        <span>Mission</span>
      </div>
      <div className="circle_inner"onClick={() => handleCircleClick("Our Vision Content")}>
        <BsEyeFill className="icon" />
        <span>Our</span>
        <span>Vision</span>
      </div>
      <div className="circle_inner1"onClick={() => handleCircleClick("Our Vision Content")}>
        <IoDiamond className="icon" />
        <span>Core</span>
        <span>Value</span>
      </div>
      {/* <div className="circle2">
          <div className="circle_inner">
            <IoDiamond className="icon" />
            <span>Our</span>
            <span>Value</span>
          </div>
        </div> */}

      <CircleModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        content={modalContent}
      />
    </div>
  );
};

export default Experience;
