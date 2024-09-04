import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
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
      description:
        "Maximize network efficiency and reliability with our dedicated support services. We ensure your network remains secure, stable, and optimized through proactive monitoring, timely troubleshooting, and regular maintenance. Our team is equipped to handle all your network needs, from remote monitoring and connectivity solutions to system updates and troubleshooting, ensuring minimal downtime and maximum performance.24/7 remote network monitoring Comprehensive network connectivity solutions Routine system and security updates Seamless OS upgrades and application patches Rapid network troubleshooting and issue resolution",
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

  const handleCardClick = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const clickX = e.clientX - rect.left;

    if (clickX < rect.width / 2) {
      swipe("left"); // Swipe left if clicked on the left side of the card
    } else {
      swipe("right"); // Swipe right if clicked on the right side of the card
    }
  };

  const { ref, inView, entry } = useInView({
    triggerOnce: false, // Trigger every time it comes into view
    threshold: 0.1, // Trigger when 10% of the component is visible
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
              onClick={(e) => handleCardClick(e, index)}
            >
              <div className={styles.flipContainer}>
                <div className={styles.flipper}>
                  <div className={styles.front}>
                    <img
                      src={card.imageUrl}
                      alt={`Project ${index + 1}`}
                      className={styles.cardImage}
                    />
                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle}>{card.title}</h3>
                    </div>
                  </div>
                  <div className={styles.back}>
                    {/* <h1 className={styles.backTitle}>{card.title}</h1> */}
                    {/* <p className={styles.backDescription}>{card.description}</p> */}
                    <div className={styles.enterprise_networking_container}>
                      <h3 className={styles.enterprise_title}>
                        Enterprise Networking
                      </h3>
                      <p className={styles.enterprise_description}>
                        Revolutionize your business connectivity with our
                        cutting-edge enterprise networking solutions. We design,
                        deploy, and manage robust network infrastructures that
                        enable seamless communication, collaboration, and data
                        transfer within your organization. Our expertise ensures
                        high-performance networks that meet your evolving needs,
                        empowering you to drive productivity and achieve your
                        business goals.
                      </p>
                      <ul className={styles.enterprise_list}>
                        <li>LAN</li>
                        <li>WAN</li>
                        <li>SD-WAN</li>
                        <li>Wireless</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Portfolio;
