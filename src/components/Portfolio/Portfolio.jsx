import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import img6 from "../../assets/cloud/CLOUD-F.jpg";
import img5 from "../../assets/consult/consult1.webp";
import img4 from "../../assets/datacenter/datacenter-f.webp";
import img3 from "../../assets/enduser/enduser1.webp";
import img2 from "../../assets/itstaff/itstaff-1.webp";
import img0 from "../../assets/network/nw-supp.webp";
import img1 from "../../assets/software/sw2.webp";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  const [cards, setCards] = useState([
    {
      position: "position0",
      className: styles.c0,
      imageUrl: img0,
      title: "Network Support",
      description: "Maximize network efficiency and reliability with our dedicated support services.",
    },
    {
      position: "position1",
      className: styles.c1,
      imageUrl: img1,
      title: "Software Solutions",
      description: "Innovative software solutions for your business.",
    },
    {
      position: "position2",
      className: styles.c2,
      imageUrl: img2,
      title: "IT Staffing",
      description: "Reliable IT staffing services to meet your needs.",
    },
    {
      position: "position3",
      className: styles.c3,
      imageUrl: img3,
      title: "End User Support",
      description: "Comprehensive end-user support services.",
    },
    {
      position: "position4",
      className: styles.c4,
      imageUrl: img4,
      title: "Data Center Services",
      description: "Secure and efficient data center solutions.",
    },
    {
      position: "position5",
      className: styles.c5,
      imageUrl: img5,
      title: "Consulting Services",
      description: "Expert consulting for your IT challenges.",
    },
    {
      position: "position6",
      className: styles.c6,
      imageUrl: img6,
      title: "Cloud Solutions",
      description: "Scalable cloud solutions for your business.",
    },
    {
      position: "position7",
      className: styles.c7,
      imageUrl: img4,
      title: "Additional Services",
      description: "A wide range of additional IT services.",
    },
  ]);

  const [modalContent, setModalContent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const swipe = (direction) => {
    const newCards = cards.map((card) => {
      let newPosition;
      if (direction === "left") {
        if (card.position >= "position1" && card.position <= "position7") {
          newPosition = `position${parseInt(card.position.substring(8)) - 1}`;
        } else {
          newPosition = "position7";
        }
      } else if (direction === "right") {
        if (card.position >= "position0" && card.position <= "position6") {
          newPosition = `position${parseInt(card.position.substring(8)) + 1}`;
        } else {
          newPosition = "position0";
        }
      }
      return { ...card, position: newPosition };
    });

    setCards(newCards);
  };

  const handleCardClick = (direction) => {
    swipe(direction);
  };

  const handleReadMoreClick = (card) => {
    setModalContent({
      sections: [
        {
          imageUrl: card.imageUrl,
          title: card.title,
          description: card.description,
          additionalContent: "More details about " + card.title + "...",
        },
        {
          imageUrl: "path/to/other/image.jpg",
          title: "Additional Info",
          description: "Further details about " + card.title + ".",
        },
      ],
    });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  const { ref, inView, entry } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && entry) {
      entry.target.style.opacity = 0;
      entry.target.style.transform = "translateY(30px)";
      setTimeout(() => {
        entry.target.style.transition =
          "opacity 0.5s ease-out, transform 0.5s ease-out";
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }, 0);
    }
  }, [inView, entry]);

  return (
    <>
      <div className={styles.SeriveDiv} id="service">
        <span className={styles.service_text}>Services</span>
      </div>
      <motion.div ref={ref} className={styles.carrousel}>
        <div className={styles.swiperContainer}>
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${styles.card} ${styles[card.position]} ${
                card.className
              }`}
            >
              <img
                src={card.imageUrl}
                alt={`Project ${index + 1}`}
                className={styles.cardImage}
                onClick={() => handleCardClick("left")} // Swipe right on image click
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>
                  {card.description}
                </p>
                <button
                  className={styles.readMoreButton}
                  onClick={() => handleReadMoreClick(card)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {isOpen && (
        <div className={styles.modalContainer}>
          <div className={styles.modalBackground}>
            <div className={styles.modal}>
              <AiOutlineClose className={styles.closeIcon} onClick={closeModal} />

              {modalContent?.sections?.map((section, index) => (
                <div
                  key={index}
                  className={
                    index % 2 === 0 ? styles.modalSection : styles.modalSectionAlt
                  }
                >
                  <img
                    src={section.imageUrl}
                    alt={section.title}
                    className={styles.modalImage}
                  />
                  <div className={styles.modalContent}>
                    <h2>{section.title}</h2>
                    <p>{section.description}</p>
                    {section.additionalContent && (
                      <p>{section.additionalContent}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
