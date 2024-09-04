import { motion } from "framer-motion";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Import the close icon
import { BiBullseye } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import "./AboutUs.css";

const MissionVisionValues = () => {
  const [modalContent, setModalContent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    {
      title: "Our Mission",
      icon: <BiBullseye className="icon" />,
      content: "Detailed information about our mission..."
    },
    {
      title: "Our Vision",
      icon: <FaRegEye className="icon" />,
      content: "Detailed information about our vision..."
    },
    {
      title: "Core Values",
      icon: <IoDiamond className="icon" />,
      content: "Detailed information about our core values..."
    },
  ];

  const openModal = (content) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  return (
    <div className="container">
      <div className="box-container">
        {data.map((item, i) => (
          <motion.div
            key={i}
            className="box"
            custom={i}
            initial="initial"
            animate="visible"
            whileHover="hover"
            onClick={() => openModal(item.content)}
          >
            <div className="icon-container">
              <motion.div className="box-icon">
                {item.icon}
              </motion.div>
            </div>
            <h2 className="box-title">{item.title}</h2>
          </motion.div>
        ))}
      </div>

      {isOpen && (
        <div id="modal-container" className={isOpen ? "one" : "one out"}>
          <div className="modal-background">
            <div className="modal">
              <AiOutlineClose className="close-icon" onClick={closeModal} />
              <h2>{modalContent}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MissionVisionValues;
