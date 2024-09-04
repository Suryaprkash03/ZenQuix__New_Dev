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
      description: "Comprehensive network support services for optimal performance.",
      sections: [
        {
          heading: "Enterprise Networking",
          content: "Revolutionize your business connectivity with our cutting-edge enterprise networking solutions. ",
          items: ["LAN", "WAN", "SD-WAN", "Wireless"]
        },
        // {
        //   heading: "Datacenter Networking",
        //   content: "Trust us with your datacenter networking requirements and experience unparalleled reliability and efficiency. ",
        //   items: [
        //     "VXLAN EVPN-based Datacenter Fabric (Cisco Nexus, Arista, Juniper)",
        //     "Cisco ACI Datacenter Fabric",
        //     "Cumulus based VXLAN EVPN Fabric (Whitebox solution)",
        //     "SDN - Cisco ACI, NFV - NSX-V and NSX-T"
        //   ]
        // },
        // {
        //   heading: "Software Defined Networking",
        //   content: "Embrace the agility and flexibility of software-defined networking to streamline your network infrastructure. Our SDN solutions centralize network control, automate provisioning, and optimize traffic flow, allowing you to adapt rapidly to changing demands. Experience enhanced network management, improved scalability, and simplified operations with our SDN expertise.",
        //   items: ["SDN - Cisco ACI, VXLAN EVPN (Cisco Nexus & Arista)", "NFV - NSX-V and NSX-T", "SDWAN"]
        // },
        // {
        //   heading: "Network Security",
        //   content: "Protect your network from cyber threats and safeguard your valuable data with our comprehensive network security solutions. We employ industry-leading practices to implement robust security measures, including firewalls, intrusion detection and prevention systems, encryption, and secure remote access, ensuring the confidentiality, integrity, and availability of your network resources.",
        //   items: ["Next-Gen Firewall", "Load Balancer", "Proxy", "Web Application Firewall (WAF)"]
        // },
        // {
        //   heading: "Network Support Services",
        //   content: "Our dedicated network support services ensure your network operates at peak performance and remains secure and reliable. We provide proactive monitoring, troubleshooting, maintenance, and optimization services to detect and resolve network issues promptly, minimizing downtime and maximizing network efficiency.",
        //   items: [
        //     "Remote network monitoring",
        //     "Network connectivity solutions",
        //     "Scheduled system and security updates",
        //     "OS upgrades",
        //     "Network troubleshooting",
        //     "Application patches"
        //   ]
        // }
      ]
    },
    {
      position: "position1",
      className: styles.c1,
      imageUrl: img1,
      title: "Software Solutions",
      description: "Innovative software solutions for your business.",
      sections: [
        {
          heading: "Enterprise Networking",
          content: "Revolutionize your business connectivity with our cutting-edge enterprise networking solutions. ",
          items: ["LAN", "WAN", "SD-WAN", "Wireless"]
        },
      ]
    },
    {
      position: "position2",
      className: styles.c2,
      imageUrl: img2,
      title: "IT Staffing",
      description: "Reliable IT staffing services to meet your needs.",
      sections: [
        {
          heading: "Enterprise Networking",
          content: "Revolutionize your business connectivity with our cutting-edge enterprise networking solutions. ",
          items: ["LAN", "WAN", "SD-WAN", "Wireless"]
        },
      ]
    },
    {
      position: "position3",
      className: styles.c3,
      imageUrl: img3,
      title: "End User Support",
      description: "Comprehensive end-user support services.",
      sections: [
        {
          heading: "Enterprise Networking",
          content: "Revolutionize your business connectivity with our cutting-edge enterprise networking solutions. ",
          items: ["LAN", "WAN", "SD-WAN", "Wireless"]
        },
      ]
    },
    {
      position: "position4",
      className: styles.c4,
      imageUrl: img4,
      title: "Data Center Services",
      description: "Secure and efficient data center solutions.",
      sections: [
        {
          heading: "Enterprise Networking",
          content: "Revolutionize your business connectivity with our cutting-edge enterprise networking solutions. ",
          items: ["LAN", "WAN", "SD-WAN", "Wireless"]
        },
      ]
    },
    {
      position: "position5",
      className: styles.c5,
      imageUrl: img5,
      title: "Consulting Services",
      description: "Expert consulting for your IT challenges.",
      sections: [
        {
          heading: "Enterprise Networking",
          content: "Revolutionize your business connectivity with our cutting-edge enterprise networking solutions. ",
          items: ["LAN", "WAN", "SD-WAN", "Wireless"]
        },
      ]
    },
    {
      position: "position6",
      className: styles.c6,
      imageUrl: img6,
      title: "Cloud Solutions",
      description: "Scalable cloud solutions for your business.",
      sections: [
        {
          heading: "Enterprise Networking",
          content: "Revolutionize your business connectivity with our cutting-edge enterprise networking solutions. ",
          items: ["LAN", "WAN", "SD-WAN", "Wireless"]
        },
      ]
    },
    {
      position: "position7",
      className: styles.c7,
      imageUrl: img4,
      title: "Additional Services",
      description: "A wide range of additional IT services.",
      sections: [
        {
          heading: "Enterprise Networking",
          content: "Revolutionize your business connectivity with our cutting-edge enterprise networking solutions. ",
          items: ["LAN", "WAN", "SD-WAN", "Wireless"]
        },
      ]
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
    setModalContent(card);
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
        <div className={styles.modalContent}>
        <div className={styles.modalImageContainer}>
            <img
              src={modalContent?.imageUrl}
              alt={modalContent?.title}
              className={styles.modalImage}
            />
          </div>
          <div className={styles.modalText}>
            {/* <h2>{modalContent?.title}</h2>
            <p>{modalContent?.description}</p> */}
            {modalContent?.sections?.map((section, index) => (
              <div key={index} className={styles.section}>
                <h3>{section.heading}</h3>
                <p>{section.content}</p>
                <ul className={styles.modalList}>
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        
        </div>
      </div>
    </div>
  </div>
)}


    </>
  );
};

export default Portfolio;
