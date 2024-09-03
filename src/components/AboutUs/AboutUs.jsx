import { motion } from "framer-motion";
import React from "react";
import { BiBullseye } from "react-icons/bi"; // Replace with actual icons
import { FaRegEye } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";

import "./AboutUs.css";

const MissionVisionValues = () => {
  const data = [
    {
      title: "Our Mission",
      content:
        "Our mission is to innovate and lead in the industry, providing top-notch solutions that empower businesses to succeed.",
      fullContent:
        "Our mission is to innovate and lead in the industry, providing top-notch solutions that empower businesses to succeed. We strive to exceed expectations and deliver excellence through our commitment to quality, integrity, and teamwork.",
      icon: <BiBullseye className="icon" />,
    },
    {
      title: "Our Vision",
      content:
        "To be a global leader in our field, inspiring positive change and setting new standards of excellence.",
      fullContent:
        "To be a global leader in our field, inspiring positive change and setting new standards of excellence. Our vision is to continuously evolve, adapt, and grow, always staying ahead of the curve and setting benchmarks for others to follow.",
      icon: <FaRegEye className="icon" />,
    },
    {
      title: "Core Values",
      content:
        "Integrity, innovation, and customer-centricity are at the heart of everything we do.",
      fullContent:
        "Integrity, innovation, and customer-centricity are at the heart of everything we do. These core values guide our actions and decisions, ensuring that we remain true to our mission and vision while delivering unparalleled value to our clients.",
      icon: <IoDiamond className="icon" />,
    },
  ];

  const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  const contentVariants = {
    initial: (i) => ({
      y: i % 2 === 0 ? 50 : -50, // First and third boxes from down to up, second box from up to down
      opacity: 0,
    }),
    hover: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
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
            variants={boxVariants}
          >
            <div className="icon-container">
              <motion.div className="box-icon" whileHover={{ opacity: 0 }}>
                {item.icon}
              </motion.div>
            </div>
            <h2 className="box-title">{item.title}</h2>
            <motion.p
              className="box-content"
              variants={contentVariants}
              custom={i}
              initial="initial"
              animate="visible"
              whileHover="hover"
            >
              {/* {item.content} */}
              <span className="full-content">{item.fullContent}</span>
            </motion.p>
          </motion.div>
        ))}
       
      </div>
    </div>
  );
};

export default MissionVisionValues;
